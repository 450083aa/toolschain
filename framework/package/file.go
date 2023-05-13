package Package

import (
	"os"
	"runtime"
	"sort"
	"strings"
)

// Exists 路径、文件是否存在
func Exists(path string) bool {
	_, err := os.Stat(path)
	if err != nil {
		if os.IsExist(err) {
			return true
		}
		return false
	}
	return true
}

type dirTree struct {
	Name     string    `json:"name"`
	Type     string    `json:"type"`
	Dir      string    `json:"dir"`
	Path     string    `json:"path"`
	Children []dirTree `json:"children"`
}

// ReadProjectTree 读取项目资源结构
func ReadProjectTree(path string) (result []dirTree) {

	parents := make([]dirTree, 0)

	fileInfo, _ := os.Stat(path)

	parents = append(parents, dirTree{
		Path:     path,
		Type:     "project",
		Dir:      "dir",
		Name:     fileInfo.Name(),
		Children: ReadDir(path),
	})

	return parents
}

// ReadFile 读取文件
func ReadFile(path string) string {
	content, err := os.ReadFile(path)
	if err != nil {
		return ""
	}
	return string(content)
}

// ReadDir 遍历目录下(包含子目录)所有文件及目录
func ReadDir(dir string) (result []dirTree) {
	fileList, err := os.ReadDir(dir)
	if err != nil {
		return result
	}

	dirPath := ""

	if runtime.GOOS == "windows" {
		dirPath = "\\"
	} else {
		dirPath = "/"
	}

	parents := make([]dirTree, 0)

	for _, info := range fileList {
		if info.IsDir() {
			if info.Name() != ".git" && info.Name() != ".xmake" && info.Name() != ".vscode" && info.Name() != ".build" && info.Name() != ".build_cache" && info.Name() != ".deps" && info.Name() != ".objs" && info.Name() != "DebugConfig" && info.Name() != "Listings" && info.Name() != "Objects" {
				if !strings.Contains(info.Name(), "Template.uvguix") && !strings.Contains(info.Name(), "uvoptx") {
					dirInfo, _ := info.Info()
					parents = append(parents, dirTree{
						Path:     dir + dirPath + info.Name(),
						Type:     "folder",
						Dir:      "dir",
						Name:     dirInfo.Name(),
						Children: ReadDir(dir + dirPath + info.Name()),
					})
				}
			}
		} else {
			if info.Name() != ".git" && info.Name() != ".xmake" && info.Name() != ".vscode" && info.Name() != ".build" && info.Name() != ".build_cache" && info.Name() != ".deps" && info.Name() != ".objs" && info.Name() != "DebugConfig" && info.Name() != "Listings" && info.Name() != "Objects" {
				if !strings.Contains(info.Name(), "Template.uvguix") && !strings.Contains(info.Name(), "uvoptx") {
					fileInfo, _ := info.Info()
					parents = append(parents, dirTree{
						Path:     dir + dirPath + info.Name(),
						Type:     "file",
						Dir:      "file",
						Name:     fileInfo.Name(),
						Children: make([]dirTree, 0),
					})
				}
			}
		}
	}

	sort.Slice(parents, func(i, j int) bool {
		return parents[i].Dir < parents[j].Dir
	})

	return parents
}

// IsDir 判断所给路径是否为文件夹
func IsDir(path string) bool {
	s, err := os.Stat(path)
	if err != nil {
		return false
	}
	return s.IsDir()
}

// IsFile 判断所给路径是否为文件
func IsFile(path string) bool {
	return !IsDir(path)
}

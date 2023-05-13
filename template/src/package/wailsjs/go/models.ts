export namespace StartWindows {
	
	export class userItem {
	    prompt_tokens: number;
	    completion_tokens: number;
	    total_tokens: number;
	
	    static createFrom(source: any = {}) {
	        return new userItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.prompt_tokens = source["prompt_tokens"];
	        this.completion_tokens = source["completion_tokens"];
	        this.total_tokens = source["total_tokens"];
	    }
	}
	export class choiceItem {
	    text: string;
	    index: number;
	    logprobs: number;
	    finish_reason: string;
	
	    static createFrom(source: any = {}) {
	        return new choiceItem(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.text = source["text"];
	        this.index = source["index"];
	        this.logprobs = source["logprobs"];
	        this.finish_reason = source["finish_reason"];
	    }
	}
	export class ChatGPTResponseBody {
	    id: string;
	    object: string;
	    created: number;
	    model: string;
	    choices: choiceItem[];
	    usage: userItem;
	    content: string;
	
	    static createFrom(source: any = {}) {
	        return new ChatGPTResponseBody(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.id = source["id"];
	        this.object = source["object"];
	        this.created = source["created"];
	        this.model = source["model"];
	        this.choices = this.convertValues(source["choices"], choiceItem);
	        this.usage = this.convertValues(source["usage"], userItem);
	        this.content = source["content"];
	    }
	
		convertValues(a: any, classs: any, asMap: boolean = false): any {
		    if (!a) {
		        return a;
		    }
		    if (a.slice) {
		        return (a as any[]).map(elem => this.convertValues(elem, classs));
		    } else if ("object" === typeof a) {
		        if (asMap) {
		            for (const key of Object.keys(a)) {
		                a[key] = new classs(a[key]);
		            }
		            return a;
		        }
		        return new classs(a);
		    }
		    return a;
		}
	}
	
	export class returnPing {
	    name: string;
	    version: string;
	    os: string;
	    arch: string;
	    host_name: string;
	    environment_version: string;
	
	    static createFrom(source: any = {}) {
	        return new returnPing(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.version = source["version"];
	        this.os = source["os"];
	        this.arch = source["arch"];
	        this.host_name = source["host_name"];
	        this.environment_version = source["environment_version"];
	    }
	}

}


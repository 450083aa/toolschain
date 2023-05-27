export namespace StartWindows {
	
	export class returnPing {
	    name: string;
	    version: string;
	
	    static createFrom(source: any = {}) {
	        return new returnPing(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.version = source["version"];
	    }
	}

}


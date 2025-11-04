class HTMLElementNotFoundError extends Error {
	constructor(message: string){
		super(message)
		this.name = 'HTMLElementNotFoundError'
	}
}

export default HTMLElementNotFoundError; 

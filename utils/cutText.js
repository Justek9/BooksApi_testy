module.exports = (content, maxLength) => {
	// cheeck content arg for error
	if (typeof content !== 'string' || content.length < 1) return 'Error'

	// check maxLength arg for error
	if (typeof maxLength !== 'number' || maxLength <= 0) return 'Error'

	if (content.length <= maxLength) return content
	return content.substr(0, content.lastIndexOf(' ', maxLength)) + '...'
}

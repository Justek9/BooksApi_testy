module.exports = fullName => {
	if (typeof fullName !== 'string' || !fullName) return 'Error'

	const [firstName, lastName, rest] = fullName.split(' ')
	if (!firstName || !lastName) return 'Error'
	if (rest) return 'Error'
	return (
		firstName[0].toUpperCase +
		firstName.slice(1).toLowerCase() +
		lastName[0].toUpperCase +
		lastName.slice(1).toLowerCase()
	)
}

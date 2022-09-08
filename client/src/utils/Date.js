const convertDate = (dateString) => {
	return new Date(dateString).toLocaleDateString('lt-LT');
};

export default convertDate;

export const formatDateToString = (date: Date) => {
	const year = date.getFullYear();
	let month = (date.getMonth() + 1).toString();
	if (+month < 10) month = "0" + month;
	let day = date.getDate().toString();
	if (+day < 10) day = "0" + day;
	const stringDate = `${day}/${month}/${year}`;
	return stringDate;
};

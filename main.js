'use strict'
{
	/*
	うるう年の条件
	1, 西暦年号が4で割り切れる年
	2, 西暦年号が100で割り切れて400で割り切れない年は平年
	*/
	const submit = document.getElementById('submit');

	submit.addEventListener('click', () => {
		const input = document.getElementById('input');
		const result = document.getElementById('result');
		const inputValue = input.value;

		if (inputValue <= 0) {
			result.textContent = '西暦を正確に入力してください';
			return;
		}

		if (inputValue % 100 == 0 && inputValue % 400 != 0) {
			result.textContent = '平年';
		} else if (inputValue % 4 == 0) {
			result.textContent = 'うるう年';
		} else {
			result.textContent = '平年';
		};
	})
}

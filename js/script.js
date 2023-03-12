const searchInput = document.getElementById('search');
const videos = document.querySelectorAll('.video');

searchInput.addEventListener('input', function () {
	const searchTerm = searchInput.value.toLowerCase();

	videos.forEach(function (video) {
		const title = video.querySelector('h3').textContent.toLowerCase();
		const description = video.querySelector('p').textContent.toLowerCase();

		if (title.includes(searchTerm) || description.includes(searchTerm)) {
			video.style.display = 'block';
		} else {
			video.style.display = 'none';
		}
	});
});

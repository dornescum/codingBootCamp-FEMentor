const text = document.getElementById('text');
const name = document.getElementById('name');
const job = document.getElementById('job');
const picture = document.getElementById('picture');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const users = [
	{
		name: 'Tanya Sinclair',
		job: 'UX Engineer',
		paragraph: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
		image: './images/image-tanya.jpg'
	},
	{
		name: 'John Tarkpor',
		job: 'Junior Front-end Developer',
		paragraph: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
		image: './images/image-john.jpg'
	}
];
let article = 0;


addEventListener('load', () => {
	picture.innerHTML = `
	         <img src="./images/pattern-bg.svg" alt="some pattern" id="pattern" 
	          class="hidden 2xl:block 2xl:absolute 2xl:-top-12 2xl:-left-40 2xl:-z-10">
			<img src="${users[article].image}" alt="${users[article].name}" id="person"
			class="h-60 w-60 lg:w-96 lg:h-96 xl:w-80 xl:h-80 2xl:w-96 2xl:h-96 xl:absolute xl:-left-24 xl:top-0 2xl:-top-2
                                z-0 rounded-xl shadow-2xl" src="./images/image-tanya.jpg"> `;
	text.innerHTML = ` <p>${users[article].paragraph}</p>`;
	job.innerHTML = `${users[article].job}`;
	name.innerHTML = `${users[article].name}`;
});

const directions = () => {
	if (article > users.length - 1) {
		article = 0;
	}

	picture.innerHTML = ` <img src="./images/pattern-bg.svg" alt="" id="pattern"  class="hidden 2xl:block 2xl:absolute 2xl:-top-12 2xl:-left-40 2xl:-z-10">
						<img src="${users[article].image}" alt="${name}" id="person" class="h-60 w-60 lg:w-96 lg:h-96 
						xl:w-80 xl:h-80
						 2xl:w-96 2xl:h-96 xl:absolute xl:-left-24 xl:top-0 2xl:-top-2
                                z-0 rounded-xl shadow-2xl show">`;
	text.innerHTML = `<p>${users[article].paragraph}</p>`;
	job.innerHTML = `${users[article].job}`;
	name.innerHTML = `${users[article].name}`;
	article++;
};
prevBtn.addEventListener('click', directions);
nextBtn.addEventListener('click', directions);

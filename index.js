const daily = document.querySelector('#daily');
const weekly = document.querySelector('#weekly');
const monthly = document.querySelector('#monthly')


/*  WORK  */
const weeklyWork = document.querySelector('#weeklyWork');
const weeklyWorkPrevious = document.querySelector('#weeklyWorkPrevious');


daily.addEventListener('click', function() {
    weeklyWork.innerText = '5hrs';
    weeklyWorkPrevious.innerText = 'Yesterday - 7hrs'
});

weekly.addEventListener('click', function() {
    weeklyWork.innerText = '32hrs';
    weeklyWorkPrevious.innerText = 'Last week - 36hrs'
});

monthly.addEventListener('click', function() {
    weeklyWork.innerText = '103hrs';
    weeklyWorkPrevious.innerText = 'Last month - 128hrs'
});

/* Play */
const weeklyPlay = document.querySelector('#weeklyPlay');
const weeklyPlayPrevious = document.querySelector('#weeklyPlayPrevious');

daily.addEventListener('click', function() {
    weeklyPlay.innerText = '1hr';
    weeklyPlayPrevious.innerText = 'Yesterday - 2hrs'
});

weekly.addEventListener('click', function() {
    weeklyPlay.innerText = '10hrs';
    weeklyPlayPrevious.innerText = 'Last week - 8hrs'
});

monthly.addEventListener('click', function() {
    weeklyPlay.innerText = '23hrs';
    weeklyPlayPrevious.innerText = 'Last month - 29hrs'
});

/* Study */
const weeklyStudy = document.querySelector('#weeklyStudy');
const weeklyStudyPrevious = document.querySelector('#weeklyStudyPrevious');

daily.addEventListener('click', function() {
    weeklyStudy.innerText = '0hrs';
    weeklyStudyPrevious.innerText = 'Yesterday - 1hr'
});

weekly.addEventListener('click', function() {
    weeklyStudy.innerText = '4hrs';
    weeklyStudyPrevious.innerText = 'Last week - 7hrs'
});

monthly.addEventListener('click', function() {
    weeklyStudy.innerText = '13hrs';
    weeklyStudyPrevious.innerText = 'Last month - 19hrs'
});

/* Exercise */
const weeklyExercise = document.querySelector('#weeklyExercise');
const weeklyExercisePrevious = document.querySelector('#weeklyExercisePrevious');

daily.addEventListener('click', function() {
    weeklyExercise.innerText = '1hr';
    weeklyExercisePrevious.innerText = 'Yesterday - 1hr'
});

weekly.addEventListener('click', function() {
    weeklyExercise.innerText = '4hrs';
    weeklyExercisePrevious.innerText = 'Last week - 5hrs'
});

monthly.addEventListener('click', function() {
    weeklyExercise.innerText = '11hrs';
    weeklyExercisePrevious.innerText = 'Last month - 18hrs'
});

/* Study */
const weeklySocial = document.querySelector('#weeklySocial');
const weeklySocialPrevious = document.querySelector('#weeklySocialPrevious');

daily.addEventListener('click', function() {
    weeklySocial.innerText = '1hr';
    weeklySocialPrevious.innerText = 'Yesterday - 3hrs'
});

weekly.addEventListener('click', function() {
    weeklySocial.innerText = '5hrs';
    weeklySocialPrevious.innerText = 'Last week - 10hrs'
});

monthly.addEventListener('click', function() {
    weeklySocial.innerText = '21hrs';
    weeklySocialPrevious.innerText = 'Last month - 23hrs'
});

/* Self-care */
const weeklySelfCare = document.querySelector('#weeklySelfCare');
const weeklySelfCarePrevious = document.querySelector('#weeklySelfCarePrevious');

daily.addEventListener('click', function() {
    weeklySelfCare.innerText = '0hrs';
    weeklySelfCarePrevious.innerText = 'Yesterday - 1hr'
});

weekly.addEventListener('click', function() {
    weeklySelfCare.innerText = '2hrs';
    weeklySelfCarePrevious.innerText = 'Last week - 2hrs'
});

monthly.addEventListener('click', function() {
    weeklySelfCare.innerText = '7hrs';
    weeklySelfCarePrevious.innerText = 'Last month - 11hrs'
});
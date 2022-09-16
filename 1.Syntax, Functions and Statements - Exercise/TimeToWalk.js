function CalculateTimeToWalk(steps, footprintInMeters, speedInKMH){
    let distanceInMeters = steps*footprintInMeters;
    let speedInMetersForHour = speedInKMH * 1000;
    let speedInMetersForASecond = speedInMetersForHour / 3600;
    let timesForRest = Math.floor(distanceInMeters/500);
    let secondForRest = timesForRest * 60;


    totalTimeForWalkingInSeconds = distanceInMeters / speedInMetersForASecond;
    totalTimeForWalkingInSeconds += secondForRest;
    let hours = Math.floor(totalTimeForWalkingInSeconds / 3600);
    let minutes = Math.floor(totalTimeForWalkingInSeconds / 60);
    let seconds = Math.round(totalTimeForWalkingInSeconds % 60);
    
    let result = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`

    console.log(result)
}


CalculateTimeToWalk(4000, 0.60, 5);
CalculateTimeToWalk(2564, 0.70, 5.5);
function getPlayerMedian(playerArray) {
	var median; 
		playerArray.sort(); 

		if(playerArray.length%2 == 1) {
			var mid = Math.round(playerArray.length/2); 
			median = playerArray[mid - 1]; 
			return median; 
		}
		else  {
			var mid = playerArray.length/2; 
			median = (playerArray[mid-1] + playerArray[mid])/2;  
			return median; 
		}
}

var Lebron = [27, 37, 34, 51, 32, 22, 31, 35, 46]; 
var Durant = [42, 41, 26, 40, 38, 33, 30, 36, 43]; 
/*document.write(getPlayerMedian(Lebron) + "<br/>"); 
document.write(getPlayerMedian(Durant) + "<br/>"); 
document.write(getPlayerMedian(Lebron.concat(Durant)) + "<br/>"); 
*/

document.write(getPlayerMedian(Lebron) + "<br/>"); 
document.write(getPlayerMedian(Durant) + "<br/>"); 
document.write(getPlayerMedian(Lebron.concat(Durant))); 
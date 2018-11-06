let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
class Driver{
  constructor(name,startDate){
    this.name = name;
    this.startDate = new Date(startDate);
  }
  yearsExperienceFromBeginningOf(endDate){
    return endDate - this.startDate.getFullYear()
  }
}

class Route{
  constructor(beginningLocation,endingLocation){
    this.beginningLocation = beginningLocation;
    this.endingLocation = endingLocation;
  }
  blocksTravelled(){
    let beginIndex = eastWest.indexOf(this.beginningLocation.horizontal);
    let endIndex = eastWest.indexOf(this.endingLocation.horizontal);
    let aveDiff = Math.abs(beginIndex-endIndex)
    let total = aveDiff + Math.abs(this.beginningLocation.vertical - this.endingLocation.vertical)
    return total
  }
  estimatedTime(peak = false){
    if (peak){
      return this.blocksTravelled()/2
    }
    else{
      return this.blocksTravelled()/3
    }
  }
}

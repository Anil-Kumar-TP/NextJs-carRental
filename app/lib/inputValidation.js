// Common Function to check if the entered Value is falsy or truthy Value
export const isItEmpty=(fieldData)=>{
    if(fieldData.trim().length===0){
      return true
    }
    return false
}

// to match a regex Pattern
export const regexPatternCondition=(regexPattern,testElement)=>{
  return regexPattern.test(testElement)
}
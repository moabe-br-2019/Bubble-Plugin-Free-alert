function(instance, properties, context) {


let text = properties.value
let result
	if (confirm(text) == true) {
    result = true
        console.log(result)
        instance.triggerEvent('confirm')
  } else {
    result = false
    console.log(result)
      instance.triggerEvent('not_confirmed')
  }



}
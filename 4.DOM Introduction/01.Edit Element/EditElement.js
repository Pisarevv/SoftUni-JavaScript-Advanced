function editElement(ref,match,replacer) {
    debugger;
    let pattern = /\%(.*?)\%/;
    let text = ref.textContent;
    while(text.includes(match)){
        text = text.replace(match,replacer);
    }

    ref.textContent = text;
    }
    
    
 



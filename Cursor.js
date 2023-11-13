AFRAME.registerComponent('cursores', {
    schema: {
        selectedId:{default:"",type:"string"}
    },

    init: function () {
        this.mouseEnter();
        console.log("hi_hello1234")
        this.mouseLeave();
    },

    update: function () {
      // Do something when component's data is updated.
    },
    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
        
    },

    checkPlace:function(){
        var id = this.el.getAttribute("id")
        var placesId = ["budapest","taj_mahal","eiffel_tower","new_york_city"]
        if(placesId.includes(id)){
            var place = document.querySelector("#placesContainer")
            place.setAttribute("cursores",{selectedId:id})
            place.setAttribute("geometry",{primitive:"ring",radiusInner:0.9,radiusOuter:2})
            place.setAttribute("material",{color:"white",opacity:1})
            console.log(id)
        }
    },

    mouseEnter:function(){
        this.el.addEventListener("mouseenter",()=>{
            this.checkPlace();
            console.log("hello123")
        })
    },

    mouseLeave:function(){
        this.el.addEventListener("mouseleave",()=>{
        var {element} = this.data
        if(element){
            var button = document.querySelector(`#${element}`)
            var id = button.getAttribute("id")
            if (id === element){
                button.setAttribute("geometry",{primitive:"ring",radiusInner:0.9,radiusOuter:1})
                button.setAttribute("material",{color:"black",opacity:1})
            }
        }
        })
    }

});

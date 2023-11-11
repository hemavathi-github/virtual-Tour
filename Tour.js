AFRAME.registerComponent('Tour', {
    schema: {
        
    },

    init: function () {
    this.placeContainer = this.el
    this.createCards();
    },

    createCards:function(){
        const cards = [
            {id:"budapest",
            url:"",
            tile:"Budapest"},
            {id:"taj_mahal",
            url:"",
            tile:"Taj Mahal"},
            {id:"eiffel_tower",
            url:"",
            title:"Eiffel Tower"},
            {id:"new_york_city",
            url:"",
            title:"New York City"}]

        var position = -50

        for(i in cards){
            var posx=position + 25
            var posy = 10
            var posz = 10
            
            var pos = {x:posx,y:posy,z:posz}
            position = posx

            var border = this.craeteBoundary(pos,i.id)
            var cardImage = this.createCardImage(i)
            
            border.appendChild(cardImage)
            this.placesContainer.appendChild(border)

        }
    },

    craeteBoundary:function(position,id){
        var element = document.createElement("a-entity")
        element.setAttribute("id",id)
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"ring",radius_inner:10,radius_outer:12})
        element.setAttribute("position",position)
        return element
    },

    createCardImage:function(item){
        var element = document.createElement("a-entity")
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"circle",radius:10})
        element.setAttribute("material",{src:"item.url"})

        return element
        
    },


});

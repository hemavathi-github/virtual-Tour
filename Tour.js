AFRAME.registerComponent('tour', {
    schema: {
        
    },

    init: function () {
    this.placeContainer = this.el
    this.createCards();
    },

    createCards:function(){
        const cards = [
            {id:"budapest",
            url:"./thumbnails/budapest.jpg",
            title:"Budapest"},
            {id:"taj_mahal",
            url:"./thumbnails/taj_mahal.png",
            title:"Taj Mahal"},
            {id:"eiffel_tower",
            url:"./thumbnails/eiffel_tower.jpg",
            title:"Eiffel Tower"},
            {id:"new_york_city",
            url:"./thumbnails/new_york_city.png",
            title:"New York City"}]

        var position = -4

        for(i of cards){
            var posx=position + 4
            var posy = 2
            var posz = -5
            
            var pos = {x:posx,y:posy,z:posz}
            position = posx

            var border = this.craeteBoundary(pos,i.id)
            var cardImage = this.createCardImage(i)
            var title = this.createTitle(i,pos)
            console.log(i.title);
            
            cardImage.appendChild(title)
            border.appendChild(cardImage)
            this.placeContainer.appendChild(border)

        }
        
        console.log("HEllo")
    },

    craeteBoundary:function(position,id){
        var element = document.createElement("a-entity")
        element.setAttribute("id",id)
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"ring",radiusInner:0.9,radiusOuter:1})
        element.setAttribute("material",{color:"black",opacity:1})
        element.setAttribute("position",position)
        element.setAttribute("cursores",{})
        return element
    },

    createCardImage:function(item){
        var element = document.createElement("a-entity")
        element.setAttribute("visible",true)
        element.setAttribute("geometry",{primitive:"circle",radius:0.5})
        element.setAttribute("material",{src:item.url})
        return element
    },

    createTitle:function(item,pos){
        var element = document.createElement("a-entity")
        element.setAttribute("text",{value:item.title,color:"black",width:20,font:"exo2bold"})
        element.setAttribute("position",{x:pos.x+8,y:-2,z:pos.z})
        return element
    }


});

var data = {
  pickable_colors: ["red","green","blue"],
  current_color: "green",
  columns: 10,
  rows: 4,
  color_history: [
    
  ],
}

//AppData Number Number -> String
function getColorInCell(data, row, column){
  var log = data.color_history.filter((log)=>{
    return log.row == row && log.column == column
  }).reverse()[0]
  
  if(log == undefined) return "white"
  
  return log.color
}

//AppData -> HtmlString
function display(data){
  var ret = ""
  
  ret += data.pickable_colors.map((color)=>{
     return "<button onclick='setCurrentColor(data, \""+color+"\")'>"+color+"</button>"
  }).join(" ")
  
  for(var row = 0; row < data.rows; row++){
    ret += "<div>"
    for(var col = 0; col < data.columns; col++){
      ret += '<div onclick="test('+row+','+col+')" class="square" style="background-color: '+ getColorInCell(data, row, col) +'">'+row+','+col+'</div>'
    } 
    ret += "</div>"
  }
  
  return ret
}

document.getElementById("grid_output").innerHTML = display(data)


// AppData Number -> void 
function setCurrentColor(data, color){
  data.current_color = color
}

//Add to end of history, even if you're click a square you've already clicked.
//AppData Number Number -> void
//setGridColor1(data, 0, 0)
function setGridColor1(data, row, column){
  data.color_history.push(
      {column: column, row: row, color: data.current_color}
  )
}

//Add to history if the square hasn't been clicked,
//   But will update the appropriate element in the array if it has.
function setGridColor2(data, row, column, color){
  
}

function rerender(){
    document.getElementById("grid_output").innerHTML = display(data)
}


function test(row,col){
  setGridColor1(data,row,col)
  rerender()
} 




function TEMP$_noteCreator(){
    return`<div class='container'>
    <div class="space"></div> <!--just for making some space for a neat look-->
    <div class="title"></div> <!--for the title image-->
    <div class="wholeNoteWrap row">
    <div class="col-md"></div>
    <div id="noteWraper" class="col-md-10 container">
    <div class="row">
    <div class="col-md-4">
    <span style="font-size:36px;border-bottom:3px solid black;border-radius:10px;">Task Name:</span>
    </div>
    
    <div class="col-md nameInput inputs">
    <input id="tasksName" class="forNote inputs" type="text" style="margin:0" placeholder="Task name here" maxlength="15" autofocus/>
        <p class="inputAlert"></p>
    </div>
    </div>
    <div class="row">
    <div class="col-md-12" style="min-height:20px"></div>
    <div class="col-md" style="margin-left:60px;">
            <textarea id="noteText" class='inputs' maxlength="50" cols="40" rows="3" placeholder="write the task here..."></textarea>
            </div>
            </div>
            <div class="col-md container" style="border-bottom:3px solid black;border-radius:10px;" >
                    <h4 id="GoalTime">Goal Time</h4>
                </div>
            <div class="row goal-wraper">
                
                <div class="col-xs-5 col-md-5 date">
                        <label>date:</label>
                    <input  id="noteDate"  class="forNote inputs" placeholder="dd/mm/yyyy" maxlength="10" style="width:150px" />
                    <p class="inputAlert"></p>
                </div>
                <div class="col-xs-5 col-md-5 date">
                    <label>time:</label>
                    <input id="noteTime"  class="forNote inputs" placeholder="0:00:Am/pm" maxlength="10" style="width:150px"/>
                    <p class="inputAlert"></p>
                </div>
            </div>
            <div>
                <button id='makeNote' onclick="thisApp.createNote.init()">Add task</button>
            </div>
        </div>
        <div class="col-md"></div>
    </div>
    <div>
    <h1 style="border-bottom:5px dotted rgb(141,44,0);">your tasks will show here</h1>
    </div>
    
    <div id="notesPlace" class="row">
    
    </div>
    </div>
    `
}

function yellowNoteExampleTemp(){
    return ` 
        <div id="{{name}}"  class="col-md-3 {{justPosted}}">
        <div class="row newTaskWraper notes" >
        <div class="col-md">
        <div style="min-height:25px">
        <p style=""> <i data-id="{{name}}" title="delete note" onclick="thisApp.createNote.removeNote(this.dataset.id)" class="far fa-trash-alt"></i></p>
        </div>
        <span id="noteName" style="border-bottom: 1px solid">{{name}}</span>
        </div>
    <div class="notesInsideText col-md-12">
        <p class="noteInText">{{text}}</p>
    </div>
    <div class="row container" style='padding-bottom:15px;'>
        <div class="col-md">
            <span>time:</span>
            <span id="noteTime">{{time}}</span>
        </div>
        <div class="col-md">
            <span>Date:</span>
            <span id="noteDtae">{{date}}</span>
        </div>
        <div class="col-md-12">
            
        </div>
        
    </div>
    
    </div>
    </div>
    `
}
function template_alertBeforeRemovingNote(){
return`
<div class="container  alert-on-remove">
    <div class="row">
        <div class="col-md-12">
            <h3>Are you sure?</h3>
        </div>
        <div class="col-md-6">
            <button onclick="removeNote(this)">Yes</button>
        </div>
        <div class="col-md-6">
            <button onclick="makeMain()">no</button>
        </div>
    </div>
</div>
`
}

function TEMP$_emptyDeletedSectionAlert(){ 
return `<h1 id='emptyDeletedAlert'>Deleted Section Is Empty</h1>`
}
import React from "react";
import  { useEffect } from 'react';
import useDrivePicker from 'react-google-drive-picker'

function GooglePicker() {
    const [openPicker,data,authResponse] = useDrivePicker();

    const handleOpenPicker =()=>{
        openPicker({
            clientId:"751689268785-mmvqdaqb1ub49faf9necdga2as6e2u9d.apps.googleusercontent.com",
            developerKey:"AIzaSyBvardidk-lj9U9NGlafYLwVYw_FTWJHR0",
            viewId:"DOCS",
            showUploadView:true,
            showUploadFolders:true,
            multiselect:true
        })
    }
    useEffect(()=>{
if(data){
    data.docs.map((i)=> console.log(i))
}
    },[data])
  return (
  <>
      <div>
          <button onClick={()=>handleOpenPicker()}>Open Picker</button>
      </div>
  </>
  );
}

export default GooglePicker;

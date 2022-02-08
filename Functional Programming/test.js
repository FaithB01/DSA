const nested = (list,l_id) => 
    list.filter (( {parent}) =>parent.id==l_id)
    .map (( {id, parent,...rest}) => ({
    
        id, 
            children: nested (list, id)    
    
    })) 
 

// function nested(l_id){
//    if(data.parents==null){
//        return data.filter(({parent})=>parent==l_id)
//    }else {
//     data.filter(({parent})=>parent.id==l_id).map (( {id, parent,...rest}) => ({
    
//         id, 
//             children: nested (list, id)    
    
//     })) 
//    }
// }

// function nested(list,l_id){
//     let children=list.filter(({parent})=>parent.id!==l_id)
//     if(list.parent!==null){
//      return   children
//     }else{
//      return   list.filter(({parent})=>parent.id==l_id).map (( {id, parent,...rest}) => ({
    
//             id, 
//                 children: nested (list, id)    
        
//         })) 
//     }
// }

    const data = [
        {"id": 1,"title": "intro",  "parent":0},
        {"id": 2,"title": "messaging",  "parent": 0},
        {"id":3 ,"title": "message category",  "parent": {"id": 2,
        "title": "messaging"}},
        {"id": 4,"title": "bulk messaging",  "parent": {"id": 2,
        "title": "messaging"}},
        {"id": 5,"title": "compose",  "parent": {"id": 4,
        "title": "bulk messaging"}},
        {"id": 7,"title": "send",  "parent": {"id": 2,
        "title": "messaging"}},
        {"id": 8,"title": "DND",  "parent": {"id": 2,
        "title": "messaging"}},
        {"id": 9,"title": "Logs",  "parent": {"id": 2,
        "title": "messaging"}},
        {"id": 10,"title": "Member Register",  "parent": 0},
        {"id": 11,"title": "Bulk",  "parent": {"id": 10,
        "title": "messaging"}},
        {"id": 12,"title": "single",  "parent": {"id": 10,
        "title": "messaging"}}
     ]
    console .log (nested(data))
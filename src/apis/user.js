export function getUserPermission(){
    const permission=[
        {   
            id:1,
            menuLabel:'项目管理',
            push:'project',
            icon:'el-icon-location',
            child:[
                {   
                    id:2,
                    menuLabel:'未接取',
                    push:'project',
                    status:0
                },
                {
                    id:3,
                    menuLabel:'已接取',
                    push:'project',
                    status:0
                }
            ]
        },{
            id:4,
            menuLabel:'会员管理',
            push:"member",
            icon:'el-icon-document',
            chid:[]
        },{
            id:5,
            menuLabel:'企业管理',
            push:"company",
            icon:'el-icon-setting',
            chid:[]
        }
    ] 
    
    return permission;
}
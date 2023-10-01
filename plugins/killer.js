export default {
    name: "analitik",
    exec: ()=>{
        return [
            {
                method: 'replace',
                data: {
                    type: 'ljs',
                    content: ""
                }
            },
            {
                method: 'replace',
                data: {
                    type: 'ajs',
                    content: ""
                }
            },
            {
                method: 'replace',
                data: {
                    type: 'acss',
                    content: ""
                }
            },
            {
                method: 'replace',
                data: {
                    type: 'lcss',
                    content: ""
                }
            },
            
        ]
    }
}
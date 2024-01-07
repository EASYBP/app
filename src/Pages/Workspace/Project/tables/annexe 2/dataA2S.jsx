
const table=[...Array(4).keys()].map(v => ({
    n1: 0,
    n2: 0,
    n3: 0,
    n4: 0,
    n5: 0,
    n6: 0,
    n7: 0,
    n8: 0,
    n9: 0,
    n10: 0,
    n11: 0,
    n12: 0,
}))
const generate = ({ num = 3 }) => [...Array(num).keys()].map(a => ({
    title: "",
    charge: 0,
    personne:0,
    hypothese: 0,
    values: table,
    extra:{
        "1":{hypothese:"",values:table},
        "2":{hypothese:"",values:table},
        "3":{hypothese:"",values:table},
        "4":{hypothese:"",values:table},
        "5":{hypothese:"",values:table},
        "6":{hypothese:"",values:table},
  
    }
}))

const dataA2S1 = generate(3)

export default { dataA2S1 }
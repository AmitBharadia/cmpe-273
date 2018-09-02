
    //Polluted students record
    var student= {
        first_name:"xxxAmXit",
        phone_number:"479654",
        address1:"ihddbdStreetcc5",
        parents_name:"sdjfhjdsf"   
    };

    console.log("Polluted Object: "+JSON.stringify(student));
    //Let's clean it
    var student_name_details={
        first_name: "Amit",
        middle_name:"Paa",
        last_name:"Bharadia"
    }
    var student_contact_detail={
        phone_number:"4578963123",
        address1:"Goodworks Apatment",
        address2:"N. Alameda Avenue",
        city:"San Jose",
        State:"California"
    };

    var student_parents_details={
        parents_name:"Yogesh",
        parent_phone_number:"5664454545"
    };

    var clean_object=Object.assign(student,student_contact_detail,student_name_details,student_parents_details);

    console.log("Clean Object: "+JSON.stringify(clean_object));

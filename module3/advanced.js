


































//booking service

// loading animation - letting customer know its loading (5-10 seconds)

// case 2: Dave is monitoring his shift 11 am

//

//fetching real data every 5 mins => update table component every 5 mins (lazy loading)


//calling apis => client (1 doctor) => 1000 => 5000 calls => db

//sending events (sending server to client)

// server will notify the client when the changed are updated (push notification) 


class patientDetails{
    constructor(age, name, medicalHistory, appointmentDate, appointmentLocation){
   this.age = age;
   this.name = name;
   this.medicalHistory = medicalHistory;
   this.appointmentDate = appointmentDate;
   this.appointmentLocation = appointmentLocation
    }
    updatepatientHistory(record){
        this.updatepatientHistory.push(record);
    }
}
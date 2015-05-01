if ( Cases.find().count() ===0 ){

    Cases.insert({
        title: 'What is my serial number?',
        fromName: '',
        fromEmail: 'john.doe@gmail.com',
        question: 'Hello,We are replacing a computer here at Acme Health System and will be transferring the below license from computer X00564 to C69754. Please deactivate the license on this computer so that we can transfer it to the new computer. GPX6-122486-RDHJJ-Y41C2B John Doe Workstation Analyst Wise Center for Research Acme Health System',
        answer:'',
        assignedTo: 'test@test.com',
        dateCreated: new Date(),
        dateAnswered: '',
        answeredBy: ''
    });
    
    Cases.insert({
        title: 'Program is crashing on start',
        fromName: 'Homer Simpson',
        fromEmail: 'homer@thesimpsons.com',
        question: 'Dear Erik, I am writing to explain Peter\'s request for the download link. It is licensed to me. So, please send me the download link. I understand that it is a single user license. Recently I purchased another license and has been wondering if I could give the old license to Peter. If it is ok, please let me know how to do so. Best, Ashley',
        answer:'',
        assignedTo: 'test@test.com',
        dateCreated: new Date(),
        dateAnswered: '',
        answeredBy: ''
    });
    
    Cases.insert({
        title: 'I am having trouble activating KillerApp',
        fromName: 'Albert Einstein',
        fromEmail: 'albert@hotmail.com',
        question: 'Hello, I\'m emailing from Acme Corp. I got the following KillerApp 8 Windows single-user serial number: GPX6-200186-RDDL3-Y5E6CD in order to get from you the link to install the full version. Thanks, Albert.',
        answer:'',
        assignedTo: '',
        dateCreated: new Date(),
        dateAnswered: '',
        answeredBy: ''
    });
    
    /*Cases.insert({
    
    });*/
    

}
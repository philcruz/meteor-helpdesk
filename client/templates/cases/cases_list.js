var casesData = [
    {
        title: 'What is my serial number?',
        fromName: 'John Doe',
        fromEmail: 'john.doe@gmail.com',
        question: 'Hello,We are replacing a computer here at Geisinger Health System and will be transferring the below license from computer X00564 to C69754. Please deactivate the license on this computer so that we can transfer it to the new computer. GPW6-122486-RHJJ-41C2B Alan Heintzelman Workstation Analyst Weis Center for Research Geisinger Health System',
        answer:'',
        assignedTo: '',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Prism is crashing on start',
        fromName: 'Homer Simpson',
        fromEmail: 'homer@thesimpsons.com',
        question: 'Dear Erik, I am writing to explain Pradeep\'s request for the download link. It is licensed to me. So, please send me the download link. I understand that it is a single user license. Recently I purchased another license and has been wondering if I could give the old license to Pradeep. If it is ok, please let me know how to do so. Best, Akira',
        answer:'',
        assignedTo: '',
        url: 'http://meteor.com'
    },
    {
        title: 'I am having trouble activating Prism',
        fromName: 'Albert Einstein',
        fromEmail: 'albert@hotmail.com',
        question: 'Hello, I\'m emailing from NIH. I got the following Prism 6 Windows single-user serial number: GPW6-200186-RDL3-5E6CD in order to get from you the link to install the full version. Thanks, Alejandro.',
        answer:'',
        assignedTo: '',
        url: 'http://themeteorbook.com'
    }
];

Template.casesList.helpers({
    cases: casesData
});
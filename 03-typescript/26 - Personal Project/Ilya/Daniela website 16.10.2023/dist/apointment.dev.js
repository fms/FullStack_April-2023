"use strict";

var DB;
var form = document.querySelector('form');
var patientName = document.querySelector('#patient-name');
var contact = document.querySelector('#contact');
var date = document.querySelector('#date');
var time = document.querySelector('#time');
var symptoms = document.querySelector('#symptoms');
var consultations = document.querySelector('#consultations');
var services = document.querySelector('#services');
document.addEventListener('DOMContentLoaded', function () {
  // create the database
  var ScheduleDB = window.indexedDB.open('consultations', 1); // if there's an error

  ScheduleDB.onerror = function () {
    console.log('error');
  }; // if everything is fine, assign the result is to the (letDB) instance 


  ScheduleDB.onsuccess = function () {
    // console.log('Database Ready');
    DB = ScheduleDB.result;
    showConsultations();
  };

  ScheduleDB.onupgradeneeded = function (e) {
    var db = e.target.result;
    var objectStore = db.createObjectStore('consultations', {
      keyPath: 'key',
      autoIncrement: true
    });
    objectStore.createIndex('patientname', 'patientname', {
      unique: false
    });
    objectStore.createIndex('contact', 'contact', {
      unique: false
    });
    objectStore.createIndex('date', 'date', {
      unique: false
    });
    objectStore.createIndex('time', 'time', {
      unique: false
    });
    objectStore.createIndex('symptoms', 'symptoms', {
      unique: false
    }); //console.log('Database ready and fields created!');
  };

  form.addEventListener('submit', addConsultations);

  function addConsultations(e) {
    e.preventDefault();
    var newConsultation = {
      patientname: patientName.value,
      contact: contact.value,
      date: date.value,
      time: time.value,
      symptoms: symptoms.value
    };
    var transaction = DB.transaction(['consultations'], 'readwrite');
    var objectStore = transaction.objectStore('consultations');
    var request = objectStore.add(newConsultation);

    request.onsuccess = function () {
      form.reset();
    };

    transaction.oncomplete = function () {
      //console.log('New schedule added');
      showConsultations();
    };

    transaction.onerror = function () {//console.log();
    };
  }

  function showConsultations() {
    while (consultations.firstChild) {
      consultations.removeChild(consultations.firstChild);
    }

    var objectStore = DB.transaction('consultations').objectStore('consultations');

    objectStore.openCursor().onsuccess = function (e) {
      var cursor = e.target.result;

      if (cursor) {
        var ConsultationHTML = document.createElement('li');
        ConsultationHTML.setAttribute('data-consultation-id', cursor.value.key);
        ConsultationHTML.classList.add('list-group-item');
        ConsultationHTML.innerHTML = "  \n                         <p class=\"font-weight-bold\">Patient Name:  <span class=\"font-weight-normal\">".concat(cursor.value.patientname, "<span></p>\n                          <p class=\"font-weight-bold\">Contact:  <span class=\"font-weight-normal\">").concat(cursor.value.contact, "<span></p>\n                         <p class=\"font-weight-bold\">Date:  <span class=\"font-weight-normal\">").concat(cursor.value.date, "<span></p>\n                         <p class=\"font-weight-bold\">Time:  <span class=\"font-weight-normal\">").concat(cursor.value.time, "<span></p>\n                         <p class=\"font-weight-bold\">Symptoms:  <span class=\"font-weight-normal\">").concat(cursor.value.symptoms, "<span></p>\n                    ");
        var cancelBtn = document.createElement('button');
        cancelBtn.classList.add('btn', 'btn-danger');
        cancelBtn.innerHTML = 'Cancel';
        cancelBtn.onclick = removeConsultation;
        ConsultationHTML.appendChild(cancelBtn);
        consultations.appendChild(ConsultationHTML);
        cursor["continue"]();
      } else {
        if (!consultations.firstChild) {
          services.textContent = 'Change your visiting hours';
          var noSchedule = document.createElement('p');
          noSchedule.classList.add('text-center');
          noSchedule.textContent = 'No results Found';
          consultations.appendChild(noSchedule);
        } else {
          services.textContent = 'Cancel Your consultations';
        }
      }
    };
  }

  function removeConsultation(e) {
    var scheduleID = Number(e.target.parentElement.getAttribute('data-consultation-id'));
    var transaction = DB.transaction(['consultations'], 'readwrite');
    var objectStore = transaction.objectStore('consultations');
    objectStore["delete"](scheduleID);

    transaction.oncomplete = function () {
      e.target.parentElement.parentElement.removeChild(e.target.parentElement);

      if (!consultations.firstChild) {
        services.textContent = 'Change your visiting hours';
        var noSchedule = document.createElement('p');
        noSchedule.classList.add('text-center');
        noSchedule.textContent = 'No results Found';
        consultations.appendChild(noSchedule);
      } else {
        services.textContent = 'Cancel your Consultation';
      }
    };
  }
});
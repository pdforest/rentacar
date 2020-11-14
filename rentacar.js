function Role(id){
  this.role_id = id;
  if(this.role_id === 1){
    this.role_title = "Admin";
    this.role_description = "System Administrator";
  }else if(this.role_id === 2){
    this.role_title = "Manager";
    this.role_description = "System Manager";
  }else {
    this.role_title = "Guest";
    this.role_description = "Guest User";
  }
}

function User(id,roleid,name,email){
  Role.call(this, roleid);
  this.user_id = id;
  this.user_name = name;
  this.user_email = email;
  this.user_date = new Date();
}

User.prototype = Object.create(Role.prototype);
User.prototype.constructor = User;

const user1 = new User(100,1,"Billy Ocean", "billy@gmail.com");
console.log(user1);

function Permission(id,role_id,title,module,description){
  this.permission_id = id;
  this.permission_role_id = role_id;
  this.permission_title = title;
  this,permission_module = module;
  this.permission_description = description;
}

function Booking(id,daterange,vehicle){
  this.booking_id = id;
  this.booking_daterange_id = daterange;
  this.booking_vehicle_id = vehicle;
  this.booking_date = new Date();
}

function Hire(booking_id,booking_daterange,booking_vehicle,id,customer,driver,transaction,agreement){
  Booking.call(this,booking_id,booking_daterange,booking_vehicle);
  this.hire_id = id;
  this.hire_customer_id = customer;
  this.hire_driver_id = driver;
  this.hire_transaction_id = transaction;
  this.hire_agreement = agreement;
}

Hire.prototype = Object.create(Booking.prototype);
Hire.prototype.constructor = Hire;

const hire1 = new Hire(1,null,null,1,null,null,null,null);
console.log(hire1);


function Service(booking_id,booking_daterange,booking_vehicle,id,odometer,items){
  Booking.call(this,booking_id,booking_daterange,booking_vehicle);
  this.service_id = id;
  this.service_odometer = odometer;
  this.service_items = items;
}

Service.prototype = Object.create(Booking.prototype);
Service.prototype.constructor = Service;

const service1 = new Service(1,null,null,1,20000,[1,2,3]);
console.log(service1);


function Daterange(id,vehicle,from,to){
  this.daterange_id = id;
  this.daterange_vehicle_id = vehicle;
  this.daterange_date_from = from;
  this.daterange_date_to = to;
}

function Vehicle(id,type,model,license,odometer,characteristics){
  this.vehicle_id = id;
  this.vehicle_type = type;
  this.vehicle_model = model;
  this.vehicle_license = license;
  this.vehicle_odometer = odometer;
  this.vehicle_characteristics = characteristics;
}

function Transaction(id,type,amount,date){
  this.transaction_id = id;
  this.transaction_type = type;
  this.transaction_amount = amount;
  this.transaction_date = date;
}


function Customer(id,name,otherName,address,email,phone){
  this.customer_id = id;
  this.customer_name = name;
  this.customer_other_name = otherName;
  this.customer_address = address;
  this.customer_email = email;
  this.customer_phone = phone;
}

function Driver(id,name,license,address,email,phone){
  this.driver_id = id;
  this.driver_name = name;
  this.driver_license = license;
  this.driver_address = address;
  this.driver_email = email;
  this.phone = phone;
}



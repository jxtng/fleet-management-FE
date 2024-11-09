# FLEET MANAGEMENT SYSTEM FOR ENUGU STATE GOVERNMENT
Client Interface For management and documentation of all cars assigned to persons or allocated to civil servants in Enugu State

## LOGIN PAGE
It comprises of the email and password input alongside with the sign in button that redirects the user to the main menu of the fleet management system.

## MAIN MENU PAGE
It contains the followings links ; 
- Dashboard 
- Fleet Inventory 
- Fleet Allocation
- Fleet Maintenance  
- Fleet Procurement 
- Settings 

These links makes it easy for the user to navigate through the different pages in the fleet management system.

## DASHBOARD
The dashboard consists of Real-time data. Real-time data in a fleet management system refers to the immediate and continuous flow of information regarding the vehicles and assets within a fleet. This data is crucial for making timely decisions, improving efficiency, and enhancing safety. Key components of the real-time data in the fleet management system dashboard include: 
- **Add/Document New Vehicle;** This is where you add or document new vehicles in the fleet management system.

- **Total Vehicles;** It shows the total number of vehicles that have been added in the fleet management system.

- **Vehicles Available;** It shows the total number of vehicles that are available for use in the fleet management system.

- **Vehicles Currently Active;** It shows the total number of vehicles that are currently active on the road.

- **Vehicles with Issues;** It shows the total number of vehicles that have issues.

- **Vehicles under maintenance;** It shows the total number of vehicles that are currently undregoing maintenance.

- **Last Trips;** This section shows the last places that a vehicle went to. The vehicles are also tagged or untagged, whether it is for busisness purpose or for private purpose.

- **Trip expenses;** It shows the amount of money spent while a vehicle was actively on the road. Expenses such as service and maintenance. Service and maintenance expenses for a car covers a range of costs associated with keeping the vehicle in good working condition and ensuring its safe operation.

- **Top Locations;** These are the key areas where vehicles in the fleet management system frequently visit.

The table shown in the dashboard of the fleet management system consists of the Driver, Car Type, Ordered Time, Start Location, Destination, Approved Sum.

- **Driver;** It shows the list of drivers assigned to each active vehicles.

- **Car Type;** It generally refers to the classification of vehicles based on their design, purpose, and features.

- **Ordered Time;** It shows the date and time in which the car was requested for.

- **Start Location;** It refers to the initial point of where a vehicle begins its journey or operation.

- **Destination;** It refers to the endpoint of a vehicle's journey.

- **Approved Sum;** It typically refers to an amount of money that has been formally authorized for the service and maintenance of each vehicle.

## FLEET INVENTORY
In the fleet inventory section, it shows the list of ordered vehicles and it consists of a search bar where you can search for any vehicle of your choice as long as it is available on the fleet management system. There are two icons beside the "filter by" and it is used to toggle between viewing the list of the vehicle information in list form or in a grid form. The first icon is to show the information in a list format while the second icon is to show the information in a grid or card format. In the "fliter by", it shows a list of ways you can search for a vehicle. It includes;
- Vehicle ID
- Vehicle Type
- Engine Number
- Make/Model
- Procurement Source 
- Responsible Officer

There is a table in the fleet inventory section that comprises of;
- **S/N;** The serial number of each vehicle.

- **Vehicle Image;** The image of each vehicle.

- **Vehicle ID/Inventory ID;** It typically refers to a unique identifier assigned to a vehicle in a dealership's inventory system or database. This ID can help track the vehicle's details, history, pricing, and availability.

- **Type;** It generally refers to the classification of vehicles based on their design, purpose, and features.

- **Make/Model;**  "Make" refers to the manufacturer or brand of the vehicle, while "Model" refers to the specific name or designation given to a particular vehicle produced by that manufacturer.
For example:
**Make;** Toyota
 **Model:** Land Cruiser.

 - **Engine Number;** The engine number is a unique identifier for an engine. It can usually be found stamped or printed on the engine block, and it may vary depending on the engine type and manufacturer.

 - **Action Button Details;** The action button consists of the following details;
 1. **View Vehicle Details;** To view the details of each vehicle.

 2. **View Vehicle History;** To view a vehicles history. Most especially for cars that have been used.

 3. **Edit Vehicle Details;** When you want to make changes to the details of a particular vehicle, you can edit the vehicle's details with this action button.

 4. **Share Vehicle Details;** To share the details of a vehicle.

5. **Delete Vehicle Info;** To delete the information of a particular vehicle.

## FLEET ALLOCATION
In the fleet allocation section, it consists of the allocate vehicles button at the top which is used to allocate vehicles. On clicking on the button, the allocate vehicles form would pop up. The form must be filled before a vehicle is being allocated to the recipient. The form requirements consists of;

1. Vehicle ID
2. Vehicle Plate Number ID
3. Vehicle Type
4. Vehicle Color
5. Vehicle Make/Model
6. Vehicle Engine Number
7. Name of Recipient
8. Position of government occupied by the recipient
9. Select date of assignment
10. Recipient Contact
11. Recipient mode of ID with options of the Civil service ID, Voters card,  NIN, and International passport
12. Recipient ID where you will upload the mode of Recipient ID you selected.
13. Vehicle Status
14. All vehicle particulars have been given to the recipient? with the options of Yes, No and Pending.
15. Responsible Officer

After filling all the necessary requirements, then click on the save and update button and a modal would pop up showing that your vehicle allocation was successful and the Vehicle ID would show in the pop up notification that it has been saved and updated. You can either cancel the pop up notification to remove the it or you can click on the back to dashboard link to take you back to the dashboard.

The Fleet Allocation section  has an Allocate vehicle button where you can see your recent allocation data and  an Assign Vehicle button where you can assign vehicles to a driver  for a specific task. When you assign a vehicle, you are actively selecting which vehicle will be used for a specific purpose.

The Allocate Vehicles button, When clicked, shows a table that consists of the Recent Allocation data.
The Recent Allocation table consists of;

- S/N (Serial Number)
- Recipient Name
- Vehicle ID
- Vehicle Type
- Vehicle Color
- Make/Model
- Engine Number
- Action

When you click on the Assign vehicles, it takes you to the assign vehicles page. It shows at the top an Assign vehicle button and when clicked, it pops up the assign vehicles form.
The Assign Vehicle form consists of;
1. Vehicle ID
2. Vehicle Plate Number ID
3. Vehicle Type
4. Vehicle Color
5. Vehicle Make/Model
6. Vehicle Engine Number
7. Name of Driver/Recipient
8. Position of government occupied by the recipient
9. Recipient/Driver's Contact
10. Recipient/Driver's mode of ID with options of the Civil service ID, Voters card,  NIN, and International passport
11. Recipient/Driver's ID where you will upload the mode of Recipient ID you selected.
12. Vehicle Status
13. All vehicle particulars have been given to the recipient? with the options of Yes, No and Pending.
14. Responsible Officer
15. Date of Order
16. Time of Order
17. Start Location
18. Approved Destination
19. Approved Allowance

After filling the form with all the necessary requirements, proceed to save and update.

The Assign Vehicles also has a table showing all the the recent assignment. The table consists of;
- S/N(Serial number)
- Driver's Name 
- Vehicle ID 
- Vehicle Type
- Vehicle Color
- Make/Model
- Engine Number
- Action

The Action button details of the recent assignment table consists of the following options;
- View Vehicle Assignment Detail
- Edit Vehicle Assignment Details
- Share Vehicle Assignment Details
- Delete Vehicle Assignment Info

## FLEET MAINTENANCE
<!-- In the fleet maintenance, it has an Add New Maintenance Record button at the top. The button is for adding new maintenance record of any vehicle in the fleet management system. Clicking on the Add New Maintenance button will navigate you to the form that is supposed to be filled with the all necessary requirements for adding a new maintenance record.
The necessary inputs in the form includes;
- Enter Vehicle ID
- Select Date
- Type of Maintenance with the options of Preventive Maintenance(PM), Corrective Maintenace and Scheduled Maintenance.
- Description of Maintenance 
- Maintenace Cost
- Milage
- Maintenance Provider
- Invoice

 After filling all the inputs with the right information, proceed to the save and update button to save and update the maintenance record of the vehicle. A modal will pop up showing that the maintenance record of a particular vehicle showing the vehicle ID has been saved and updated. -->

 The fleet maintenance table shows the vehicles and the last service date and the next date that the vehicle is due for servicing.
The table consists of;
- S/N(Serial Number)
- Vehicle Image
- Vehichle ID/Inventory ID
- Vehicle Type
- Liscense Plate
- Last Service Date
- Next Service Due
- Status

The Action button details in the maintenance table consists of the following options;
- View Vehicle Maintenace History
- Add New Maintenance History
- Share Maintenance Details
- Delete Maintenace Info

 In the fleet maintenance table, they are two icons seen close to the 'filter by'  in which you can view the table data in a list format or in a card format.

 In the Action button details, Clicking on the View Vehicle Maintenance History of any vehicle would navigate you to the maintenance log of that particular vehicle.

 The View Vehicle Maintenance History page  contains a heading of  maintenance log with the Vehicle ID of a particular vehicle. It displays the vehicle overview which is typically referred to a summary  of important information and details about a specific vehicle in fleet management system. The Vehicle overview shows the Mileage, Vehicle Type, Current Status(Whether active or not active), Last maintenance date and Fuel efficiency.
There are also buttons to click to view the details of a particular vehicle. They include;
- Maintenance Log
- Scheduled Maintenance
- Breakdown Incident
- Parts Replacement
- Maintenace Cost Analytics
- Fuel and Oil Monitoring

1. **Maintenance Log;** At the top, it has a button to add maintenance record and clicking on it would display an add new maintenance record form. The inputs in the form includes;
- Enter Vehicle ID
- Select Date
- Type of Maintenance with the options of Preventive Maintenance(PM), Corrective Maintenace and Scheduled Maintenance.
- Description of Maintenance 
- Maintenace Cost
- Milage
- Maintenance Provider
- Invoice

After filling all the inputs with the right information, proceed to the save and update button to save and update the maintenance record of the vehicle. A modal will pop up showing that the maintenance record of a particular vehicle showing the vehicle ID has been saved and updated.

The Maintenance Log also displays a table that comprises of the maintenance data of the vehicle. The table comprises of;
- S/N(Serial Number)
- Date (the date of maintenance)
- Type of Maintenace(Whether it was preventive, corrective or scheduled)
- Description(the descrption of the maintenance that was done on the vehicle eg. Oil change or tire rotation)
- Cost(cost of maintenance)
- Mileage(refers to the distance that a vehicle has traveled, typically measured in miles or kilometers.)
- Maintenace Provider(the workshop that rendered the maintenance services)
- Invoice(refers to a detailed bill issued for services rendered related to the maintenance and repair of vehicles )
- Action(consists of three action button details, which are; Add Maintenance Record, Edit Record and Delate Record.)

2. **Scheduled Maintenance;** In the schedule maintenance page, there is a Schedule a New Service button at the top. Clicking on the button displays a Schedule a new service form. The form consists of the following inputs;
- Enter Vehicle ID
- Service Type
- Select Date
- Notes/Comments

After filling the form with all the neccessary information, proceed to clicking on the Schdule service button. Clicking on the schedule service button would pop up a modal(notification) showing that your service schedule have been successfully saved and updated.

The Schedule Maintenance page also has a table with the schedule maintenance data. The table comprises of the folllwing;
- S/N
- Date & Time
- Service Name
- Status(Pending or Confirmed)
- Action(with the options of Schedule a New Service, Edit Record, Reschedule Appointment, Cancel Schedule and Delete Record)

3. **Breakdown Incident;** 
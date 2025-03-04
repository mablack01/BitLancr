import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css', './../app.component.css']
})
export class ProfileComponent implements OnInit {

	loaded = false;
	id: String;
	handle: String;
	mockData = [];
	userData: {};
	userActivity = [];

	constructor(private route: ActivatedRoute) {
		this.mockData = [
			{
				id: 1,
				fname: "Oracle",
				lname: "Oracle",
				email: "oracle@bytlancr.com",
				handle: "Oracle",
				pass: "oracleBL",
				role: "biz",
				skills: ["java", "javascript", "angular"],
				bio: "Emerging technologies are disrupting old paradigms and unleashing new opportunities. Oracle has embedded innovative technologies in every aspect of our cloud, enabling companies to reimagine their businesses, processes, and experiences. With the introduction of Oracle Autonomous Database, the industry’s only self - driving, self - securing, and self - repairing database, Oracle is again revolutionizing how data is managed.Oracle is the #1 provider of business software, with a broad portfolio of solutions for companies of all sizes.Today, 430, 000 customers in 175 countries use Oracle technologies to seize business opportunities and solve real, tangible challenges.",
				website: "oracle.com",
				profilePicture: "assets/oracle/logo.png",
				organization: "Oracle",
				accountLevel: "Premium",
				status: "Looking for software developers."
			},
			{
				id: 2,
				fname: "Intel",
				lname: "Intel",
				email: "intel@bytelancr.com",
				handle: "Intel",
				pass: "IntelBL",
				role: "biz",
				skills: ["python", "mysql", "php"],
				bio: "Emerging technologies are disrupting old paradigms and unleashing new opportunities. Oracle has embedded innovative technologies in every aspect of our cloud, enabling companies to reimagine their businesses, processes, and experiences. With the introduction of Oracle Autonomous Database, the industry’s only self - driving, self - securing, and self - repairing database, Oracle is again revolutionizing how data is managed.Oracle is the #1 provider of business software, with abroad portfolio of solutions for companies of all sizes.Today, 430, 000 customers in 175 countries use Oracle technologies to seize business opportunities and solve real, tangible challenges.",
				website: "intel.com",
				profilePicture: "assets/intel/job1.png",
				organization: "Intel",
				accountLevel: "Premium",
				status: "Looking for software developers."
			},
			{
				id: 3,
				fname: "Cam",
				lname: "Scigliano",
				email: "cscigliano@umass.com",
				handle: "cscigs77",
				pass: "qwerty",
				role: "dev",
				skills: ["python", "mysql", "php"],
				bio: "Whaddup my dudes I'm a delvelelepor",
				website: "CamTheMan.org",
				profilePicture: "assets/people/cscigs.jpg",
				organization: "UMASS AMHERST",
				accountLevel: "Student",
				status: "I'm the best dev, so you have to pay me"
			},
			{
				id: 4,
				fname: "Miles",
				lname: "Black",
				email: "mblack@umass.com",
				handle: "MilesBMoney",
				pass: "123456",
				role: "admin",
				skills: ["angular", "bootstrap", "material", "react", "html"],
				bio: "Hi, I'm Miles, the admin! I like to develop, this is my bio. I like to develop, this is my bio. I like to develop, this is my bio. I like to develop, this is my bio. I like to develop, this is my bio.",
				website: "http://bytelancr.com",
				profilePicture: "assets/people/Miles.jpeg",
				organization: "ByteLancr",
				accountLevel: "admin",
				status: "Just an admin, sent here to keep the king's peace."
			},
			{
				id: 5,
				fname: "Pauly",
				lname: "Mikulskis",
				email: "pmikul$ki$@umass.com",
				handle: "PaulinOnABudget",
				pass: "password",
				role: "dev",
				skills: ["python", "mysql", "php", "flask", "C/C++"],
				bio: "I am a better develper than anybody else",
				website: "Pail.org",
				profilePicture: "assets/people/pailm.jpg",
				organization: "UMASS AMHERST",
				accountLevel: "Student",
				status: "I'm the bester dev, so you have to pay me more."
			},
			{
				id: 6,
				fname: "Alex",
				lname: "Bergeron",
				email: "ambergeron@umass.com",
				handle: "abizzle",
				pass: "passcode",
				role: "dev",
				skills: ["java", "angular", "C/C++", "javascript", "mysql"],
				bio: "Average developer, for average wages",
				website: "TheFacebook.com",
				profilePicture: "assets/people/ambergeron.jpg",
				organization: "MyBusiness",
				accountLevel: "Premium",
				status: "I'm the best dev, so you have to pay me"
			},
			{
				id: 7,
				fname: "Samuel",
				lname: "Harris",
				email: "sharris@umass.com",
				handle: "TheSolution",
				pass: "qwerty",
				role: "geembus",
				skills: ["all"],
				bio: "Watch your step. I'm always watching.",
				website: "google.com",
				profilePicture: "assets/people/sharris.jpg",
				organization: "The Universe",
				accountLevel: "Omnipotent",
				status: "Scourging the scum on this site."
			}
		];
	}

	ngOnInit() {
		this.handle = this.route.snapshot.paramMap.get('handle');
		this.id = this.route.snapshot.paramMap.get('id');
		if (this.handle != null) {
			//This code simulates we got a handle, load the user.
			for (let user of this.mockData) {
				if (user.handle == this.handle) {
					this.userData = user;
				}
			}
		}
		if (this.id != null) {
			//This code simulates we got an id, load the user.
			for (let user of this.mockData) {
				if (user.id == this.id) {
					this.userData = user;
				}
			}
		}
		if (this.id == null && this.handle == null) {
			//This code simulates no handle was provided, show logged in user.
			this.userData = this.mockData[3];
		}
		//Grab user activity as well, this will be an endpoint
		this.userActivity[0] = {
			id: 1,
			uid: 4,
			cid: 1,
			bidId: 2,
			oid: null,
			description: "Miles placed a bid on a contract.",
			action: "View Bid",
			date: "March 14, 2019"
		}
		this.userActivity[1] = {
			id: 2,
			uid: 4,
			cid: 1,
			bidId: null,
			oid: null,
			description: "Miles accepted a contract.",
			action: "View Contract",
			date: "March 15, 2019"
		}
		this.userActivity[2] = {
			id: 3,
			uid: 4,
			cid: 2,
			bidId: 4,
			oid: null,
			description: "Miles placed a bid on a contract.",
			action: "View Bid",
			date: "March 17, 2019"
		}
		this.userActivity[3] = {
			id: 4,
			uid: 4,
			cid: null,
			bidId: null,
			oid: 3,
			description: "Miles endorsed a user.",
			action: "View Profile",
			date: "March 19, 2019"
		}
		//Gather user data from endpoint using handle, if exists.
		//Simulating an end point here.
		var root = this;
		setTimeout(function() {
			root.loaded = true;
			console.log("Data loaded.");
		}, 3000);
	}

}

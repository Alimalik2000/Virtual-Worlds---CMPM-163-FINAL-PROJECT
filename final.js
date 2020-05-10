
//load all textures
	var suntexture = new THREE.TextureLoader().load( 'textures/suntexture.jpg' );
	var mercurytexture = new THREE.TextureLoader().load( 'textures/mercurytexture.jpg' );
	var venustexture = new THREE.TextureLoader().load( 'textures/venustexture.jpg' );
	var earthtexture = new THREE.TextureLoader().load( 'textures/earthtexture.jpg' );
	var marstexture = new THREE.TextureLoader().load( 'textures/marstexture.jpg' );
	var jupitertexture = new THREE.TextureLoader().load( 'textures/jupitertexture.jpg' );
	var saturntexture = new THREE.TextureLoader().load( 'textures/saturntexture.jpg' );
	var uranustexture = new THREE.TextureLoader().load( 'textures/uranustexture.png' );
	var neptunetexture = new THREE.TextureLoader().load( 'textures/neptunetexture.jpg' );
	var galaxytexture1 = new THREE.TextureLoader().load( 'textures/galaxy.jpg' );
	var galaxytexture2 = new THREE.TextureLoader().load( 'textures/galaxy2.jpg' );


//basic three setup
var scene, renderer, camera, controls;

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera(50,
window.innerWidth/window.innerHeight, 0.1, 1000);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
	

//all planets setup

//sun for sunlight
var sun = new THREE.SphereGeometry(3, 1, 1);
var sunLight = new THREE.PointLight(0xffffff);
sunLight.position.set(0, 0, 0); 
sunLight.castShadow = true; 
sunLight.shadowMapWidth = 1024; 
sunLight.shadowMapHeight = 1024; 
sunLight.shadowCameraNear = 500; 
sunLight.shadowCameraFar = 4000;
sunLight.add(new THREE.Mesh(sun, new THREE.MeshBasicMaterial({ color: 0xffa500 })));
sunLight.shadowCameraFov = 30;
scene.add(sunLight);

//sun with texture
var sun2 = new THREE.SphereGeometry(3, 50, 50);
var material = new THREE.MeshBasicMaterial( { map: suntexture } );
var sunsphere = new THREE.Mesh( sun2, material );
scene.add( sunsphere );

//outer glow for sun
var num=3.01;
var glow = new THREE.MeshBasicMaterial( { color: 0xff0000, transparent: true, opacity: 0.03 } );
for(var i=0;i<10;i++)
{
	var sphereGeom =  new THREE.SphereGeometry( num, 100, 100 );
	var sphere = new THREE.Mesh( sphereGeom, glow );
	scene.add(sphere);
	num+=.07;
}


//Mercury
var geometry = new THREE.SphereGeometry(0.3, 10, 10);
var material = new THREE.MeshLambertMaterial( { map:mercurytexture } );
var mercury = new THREE.Mesh( geometry, material );
mercury.position.set(-5, 0, -5);
scene.add(mercury);

//Venus
var geometry = new THREE.SphereGeometry(0.4, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:venustexture } );
var venus = new THREE.Mesh( geometry, material );
venus.position.set(-7, 0, 7);
scene.add(venus);

//Earth
var geometry = new THREE.SphereGeometry(0.6, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:earthtexture } );
var earth = new THREE.Mesh( geometry, material );
earth.position.set(20, 0, -20);
scene.add(earth);

//Mars
var geometry = new THREE.SphereGeometry(0.5, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:marstexture } );
var mars = new THREE.Mesh( geometry, material );
mars.position.set(10, 0, 10);
scene.add(mars);

//Jupiter
var geometry = new THREE.SphereGeometry(2, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:jupitertexture } );
var jupiter = new THREE.Mesh( geometry, material );
jupiter.position.set(20, 0, -20);
scene.add(jupiter);

//Jupiter ring
var geometry = new THREE.RingGeometry( 2.2, 3, 32 );
var material = new THREE.MeshLambertMaterial( { map:jupitertexture, side: THREE.DoubleSide } );
var jupiterring = new THREE.Mesh( geometry, material );
jupiterring.rotation.x=11;
jupiterring.position.set(20, 0, -20);
scene.add( jupiterring );

//Saturn
var geometry = new THREE.SphereGeometry(1.2, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:saturntexture } );
var saturn = new THREE.Mesh( geometry, material );
saturn.position.set(-10, 0, -20);
scene.add(saturn);

//Saturn ring
var geometry = new THREE.RingGeometry( 2, 2.9, 32 );
var material = new THREE.MeshLambertMaterial( { map:saturntexture, side: THREE.DoubleSide } );
var saturnring = new THREE.Mesh( geometry, material );
saturnring.rotation.x=90;
saturn.position.set(-10, 0, -20);
scene.add( saturnring );

//Uranus
var geometry = new THREE.SphereGeometry(1, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:uranustexture } );
var uranus = new THREE.Mesh( geometry, material );
uranus.position.set(20, 0, -20);
scene.add(uranus);

//Uranus ring
var geometry = new THREE.RingGeometry( 2.1, 2.5, 32 );
var material = new THREE.MeshLambertMaterial( { map:uranustexture, side: THREE.DoubleSide } );
var uranusring = new THREE.Mesh( geometry, material );
uranusring.position.set(-10, 0, -20);
scene.add( uranusring );

// Neptune.
var geometry = new THREE.SphereGeometry(1, 20, 20);
var material = new THREE.MeshLambertMaterial( { map:neptunetexture } );
var neptune = new THREE.Mesh( geometry, material );
neptune.position.set(50, 0, -20);
scene.add(neptune);

//Neptune ring
var geometry = new THREE.RingGeometry( 2.2, 2.4, 32 );
var material = new THREE.MeshLambertMaterial( { map:neptunetexture, side: THREE.DoubleSide } );
var neptunering = new THREE.Mesh( geometry, material );
neptunering.position.set(-10, 0, -20);
neptunering.rotation.x=-90;
scene.add( neptunering );

//Galaxy 1
var geometry = new THREE.BoxGeometry(1, 100, 100);
var material = new THREE.MeshBasicMaterial( { map:galaxytexture1 } );
var galaxy1 = new THREE.Mesh( geometry, material );
galaxy1.position.set(800, 100, 50);
scene.add(galaxy1);

//Galaxy 2
var geometry = new THREE.BoxGeometry(100, 1, 100);
var material = new THREE.MeshBasicMaterial( { map:galaxytexture1 } );
var galaxy2 = new THREE.Mesh( geometry, material );
galaxy2.position.set(200, -800, -100);
scene.add(galaxy2);

//Galaxy 3
var geometry = new THREE.BoxGeometry(1, 100, 100);
var material = new THREE.MeshBasicMaterial( { map:galaxytexture2 } );
var galaxy3 = new THREE.Mesh( geometry, material );
galaxy3.position.set(-900, 200, -400);
galaxy3.rotation.y+=100;
scene.add(galaxy3);

//Galaxy 4
var geometry = new THREE.BoxGeometry(100, 100, 1);
var material = new THREE.MeshBasicMaterial( { map:galaxytexture2 } );
var galaxy4 = new THREE.Mesh( geometry, material );
galaxy4.position.set(100, -100, 1000);
galaxy4.rotation.y-=50;
scene.add(galaxy4);

//stars
var geometry2 = new THREE.Geometry();
var totalObjects = 40000;
var container = document.createElement('div');
document.body.appendChild( container );
scene.fog = new THREE.FogExp2( 0x000000, 0.001 );  

for (i = 0; i < totalObjects; i ++) 
{ 
  var vertex = new THREE.Vector3();
  vertex.x = (Math.random()-.5)*2000;
  vertex.y = (Math.random()-.5)*2000;
  vertex.z = (Math.random()-.5)*20000;

  if(distanceVector(vertex, new THREE.Vector3(0,0,0))>100)
  {
	geometry2.vertices.push( vertex );
  }
  
}

var material = new THREE.ParticleBasicMaterial( { size: 3 });
var particles = new THREE.ParticleSystem( geometry2, material );
scene.add( particles ); 
var moveparticles=0;//used in render to move particles




function render() {
  requestAnimationFrame(render);

  var time = Date.now() * 0.0002;

  //galaxy rotation
  galaxy1.rotation.x+=.001;
  galaxy2.rotation.y-=.001;
  galaxy3.rotation.x+=.002;
  galaxy4.rotation.z-=.003;

  //sun rotation
  sunsphere.rotation.x+=.0002;
  sunsphere.rotation.y+=.0002;
  sunsphere.rotation.z+=.0002;

  //mercury rotation
  mercury.position.x = Math.sin( time * 4.5 ) * 5;
  mercury.position.y = Math.cos( time * 4.5 ) * 2;
  mercury.position.z = Math.cos( time * 4.5 ) * 5;
  
  //venus rotation
  venus.position.x = Math.sin( time * -2.5 ) * 9;
  venus.position.y = Math.sin( time * -1.5 ) * 2;
  venus.position.z = Math.cos( time * -2.5 ) * 9;
  
  //earth rotation
  earth.position.x = Math.sin( time * 1.5 ) * 13;
  earth.position.z = Math.cos( time * 1.5 ) * 13;
  
  //mars rotation
  mars.position.x = Math.sin( time * 1 ) * 18;
  mars.position.y = Math.cos( time * 1 ) * 4;
  mars.position.z = Math.cos( time * 1 ) * 18;
  
  //jupiter rotation
  jupiter.position.x = jupiterring.position.x = Math.sin( time * 0.5 ) * 25;
  jupiter.position.y = jupiterring.position.y = Math.sin( time * 0.5 ) * 3;
  jupiter.position.z = jupiterring.position.z = Math.cos( time * 0.5 ) * 25;
  
  //saturn rotation
  saturn.position.x = saturnring.position.x = Math.sin( time * 0.3 ) * 32;
  saturn.position.z = saturnring.position.z = Math.cos( time * 0.3 ) * 32;
  
  //uranus rotation
  uranus.position.x = uranusring.position.x = Math.sin( time * 0.2 ) * 40;
  uranus.position.y = uranusring.position.y = Math.cos( time * 0.2 ) * 10;
  uranus.position.z = uranusring.position.z = Math.cos( time * 0.2 ) * 40;
  
  //nepune rotation
  neptune.position.x = neptunering.position.x = Math.sin( time * 0.1 ) * 50;
  neptune.position.y = neptunering.position.y = Math.cos( time * 0.1 ) * 20;
  neptune.position.z = neptunering.position.z = Math.cos( time * 0.1 ) * 50;

  //used to move particles slghtly
  moveparticles++;
 var ps=.04;
 
  if(moveparticles<1000)
  {
  	particles.position.x+=ps;
  }
  else if(moveparticles<2000)
  {
  	particles.position.y+=ps;
  }
  else if(moveparticles<3000)
  {
  	particles.position.z+=ps;
  }
  else if(moveparticles<4000)
  {
  	particles.position.x-=ps;
  }
  else if(moveparticles<5000)
  {
  	particles.position.y-=ps;
  }
  else if(moveparticles<6000)
  {
  	particles.position.z-=ps;
  }
  else
  {
  	moveparticles=0;
  }
	
  renderer.render(scene, camera);
}


//method to find distance bewteen two three vectors
function distanceVector( v1, v2 )
{
    var dx = v1.x - v2.x;
    var dy = v1.y - v2.y;
    var dz = v1.z - v2.z;

    return Math.sqrt( dx * dx + dy * dy + dz * dz );
}



main();
function main()
{


	//used to cinematic zoom out
	camera.position.z=4;
	var x=0;
	while(x<100)
	{
	zoomOut(10);
	x++;
	}
	

	render();

}

var seconds = 0;
var interval ;
var starting=true;

function zoomOut(seconds) { 
  
  interval = setInterval(function() {
    clearInterval(interval);      
    if(starting) 
    {    
    	if(camera.position.z<7)
    	{
    		camera.position.z+=.0009;
    		scene.rotation.y+=.00005;
    	}
    	else if(camera.position.z<15)
    	{
    		{
    		camera.position.z+=.00085;
    		scene.rotation.y+=.000045;
    		}
    	}
    	else if(camera.position.z<25)
    	{
    		{
    		camera.position.z+=.0008;
    		scene.rotation.y+=.00004;
    		}
    	}
    	else if(camera.position.z<35)
    	{
    		{
    		camera.position.z+=.00075;
    		scene.rotation.y+=.000035;
    		}
    	}
    	else if(camera.position.z<45)
    	{
    		{
    		camera.position.z+=.00070;
    		scene.rotation.y+=.00003;
    		}
    	}
    	else
    	{
    		starting=false;
    		controls = new THREE.OrbitControls( camera, renderer.domElement );
    	}
        }   
    	},1)
}



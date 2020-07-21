window.onload = function(){
    const width = window.innerWidth
    const height = window.innerHeight
    const canvas = document.querySelector("#canvas")

    canvas.setAttribute('width',width)
    canvas.setAttribute('height', height)

  
    const renderer = new THREE.WebGLRenderer({canvas: canvas})
    renderer.setClearColor("black")

    const scene = new THREE.Scene()

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 5000)
    camera.position.set(0, 0, 1000)


    const geometrySphere = new THREE.SphereGeometry(200, 12, 12)
    const materialSphere = new THREE.MeshBasicMaterial({color: 0xffffff, vertexColors: true})
    
    const geometryBox = new THREE.BoxGeometry(200, 200, 200, 4, 4)
    const loader = new THREE.TextureLoader()
    const materialBox = new THREE.MeshBasicMaterial({map: loader.load('images/1.jpg')}) 
    
        

    const geometryPyramida = new THREE.CylinderGeometry(0, 200, 200, 4 ,1)
    const materialPyramida = new THREE.MeshNormalMaterial()

    
    for(let i =0;i< geometrySphere.faces.length; i++){  
        geometrySphere.faces[i].color.setRGB(Math.random(), Math.random(), Math.random())
    }

    const sphere = new THREE.Mesh(geometrySphere, materialSphere)
    sphere.position.x = 0

    const cube = new THREE.Mesh(geometryBox, materialBox)
    cube.position.x = -500

    const pyramid = new THREE.Mesh(geometryPyramida, materialPyramida)
    pyramid.position.x = 500
    
    scene.add(cube)
    scene.add(sphere)
    scene.add(pyramid)

    function loop(){
        const speed = 0.01
        sphere.rotation.y += speed
        cube.rotation.x += speed
        cube.rotation.y += speed
        pyramid.rotation.z += speed
        pyramid.rotation.x += speed
        renderer.render(scene, camera)
        requestAnimationFrame(() => {loop()})
    }

    
    loop()
}
const card = document.getElementById('tilt');

        document.addEventListener('mousemove', (e) => {
            const { clientX, clientY } = e;
            const { innerWidth, innerHeight } = window;

            const offsetX = (clientX - innerWidth / 2) / innerWidth;
            const offsetY = (clientY - innerHeight / 2) / innerHeight;

            const tiltX = -offsetY * 20; // Inclinaison verticale
            const tiltY = offsetX * 20; // Inclinaison horizontale

            card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });

        document.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
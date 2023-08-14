// helper/modalPosition.js
export const calculateModalPosition = (initialX, initialY, clientX, clientY) => {
    const newLeft = clientX - initialX;
    const newTop = clientY - initialY;
    return {
        left: newLeft + 'px',
        top: newTop + 'px',
    };
};

export const updateModalPosition = (modalStyle, setModalStyle) => (e) => {
    const initialX = e.clientX - modalStyle.left;
    const initialY = e.clientY - modalStyle.top;

    const handleMouseMove = (e) => {
        const { left, top } = calculateModalPosition(initialX, initialY, e.clientX, e.clientY);
        setModalStyle({
            left,
            top,
        });
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
};

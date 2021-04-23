
    // Heap - Tareas inmediatas
    setTimeout(callbackSetTimeout, 3000);

    // Call-Stack - Tareas pendientes
    function callbackSetTimeout() {
      alert("Hola mundo");
    }
//const { saveDataSheet } = require('./helpers');

module.exports.main = {
    labelmain_bot1: (options, event, context, callback) => {
		context.simpledb.roomleveldata.phone = event.sender.split(':')[1];
        options.next_state = 'labelmain_bot2';
        callback(options, event, context);
    },
    labelmain_bot2: (options, event, context, callback) => {
        options.next_state = 'labelmain_user1';
        callback(options, event, context);
    },
    labelmain_user1: (options, event, context, callback) => {
        context.simpledb.roomleveldata.name = event.message;
        options.data.name = event.message;
        options.next_state = 'labelmain_bot3';
        callback(options, event, context);
    },
    labelmain_bot5: (options, event, context, callback) => {
        options.next_state = 'labelmain_bot6';
        callback(options, event, context);
    },
    labelmain_bot6: (options, event, context, callback) => {
        options.next_state = 'labelmain_user4';       
        callback(options, event, context);
    },
    labelmain_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.dni = event.message;
        context.simpledb.roomleveldata.fechareg = Math.floor(Date.now());
        saveRegistro(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },    
};

module.exports.ListaRutas = {
    labellr_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labellr_user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
    labellr_user3: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot3';
        callback(options, event, context);
    },
    labellr_user4: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot4';
        callback(options, event, context);
    },
    labellr_user5: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot5';
        callback(options, event, context);
    },
};

module.exports.Ruta1 = {
    labelr1_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labelr1_user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
    labelr1_user3: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot3';
        callback(options, event, context);
    },
    labelr1_user4: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot4';
        callback(options, event, context);
    },
    labelr1_user5: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot5';
        callback(options, event, context);
    },
};

module.exports.R1Curso1 = {
    labelc1_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 1;
        context.simpledb.roomleveldata.curso = 1;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc1_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc1_bot2: (options, event, context, callback) => {
        options.next_state = 'labelc1_user1';
        callback(options, event, context);
    },
    labelc1_user1: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot3';
        callback(options, event, context);
    },
    labelc1_bot11: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());        
        options.next_state = 'labelc1_user9';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R1Curso2 = {
    labelc2_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 1;
        context.simpledb.roomleveldata.curso = 2;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc2_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc2_bot2: (options, event, context, callback) => {
        options.next_state = 'labelc2_user1';
        callback(options, event, context);
    },
    labelc2_user1: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot3';
        callback(options, event, context);
    },
    labelc2_user20: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());        
        options.next_state = 'labelc2_bot29';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R1Curso3 = {
    labelc3_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 1;
        context.simpledb.roomleveldata.curso = 3;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc3_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc3_bot2: (options, event, context, callback) => {
        options.next_state = 'labelc3_user1';
        callback(options, event, context);
    },
    labelc3_user1: (options, event, context, callback) => {
        options.next_state = 'labelc3_bot3';
        callback(options, event, context);
    },
    labelc3_user7: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());        
        options.next_state = 'labelc3_bot12';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R1Curso4 = {
    labelc4_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 1;
        context.simpledb.roomleveldata.curso = 4;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc4_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc4_bot2: (options, event, context, callback) => {
        options.next_state = 'labelc4_user1';
        callback(options, event, context);
    },
    labelc4_user1: (options, event, context, callback) => {
        options.next_state = 'labelc4_bot3';
        callback(options, event, context);
    },
    labelc4_user7: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());        
        options.next_state = 'labelc4_bot11';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R1Evaluacion = {
    labeleva_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 1;
        context.simpledb.roomleveldata.curso = 5;
        context.simpledb.roomleveldata.fechainicioeva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot2';
        saveInicioEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labeleva_user2: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot5';
        callback(options, event, context);
    },
    labeleva_bot5: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_user3: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_bot6: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot7';
        callback(options, event, context);
    },
    labeleva_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot8';
        callback(options, event, context);
    },
    labeleva_bot8: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_user5: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_bot9: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot10';
        callback(options, event, context);
    },
    labeleva_bot10: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafineva = Math.floor(Date.now());
        options.next_state = 'labeleva_user6';
        saveFinEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.Ruta2 = {
    labelr2_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labelr2_user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
};

module.exports.R2Curso1 = {
    labelc1_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 2;
        context.simpledb.roomleveldata.curso = 1;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc1_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc1_bot3: (options, event, context, callback) => {
        options.next_state = 'labelc1_user3';
        callback(options, event, context);

    },
    labelc1_bot4: (options, event, context, callback) => {
        options.next_state = 'labelc1_user3';
        callback(options, event, context);
    },
    labelc1_user3: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot5';
        callback(options, event, context);
    },
    labelc1_bot8: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot9';
        callback(options, event, context);
    },
    labelc1_bot9: (options, event, context, callback) => {
        options.next_state = 'labelc1_user7';
        callback(options, event, context);
    },
    labelc1_user7: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot10';
        callback(options, event, context);
    },
    labelc1_bot26: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());       
        options.next_state = 'labelc1_user20';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R2Evaluacion = {
    labeleva_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 2;
        context.simpledb.roomleveldata.curso = 2;
        context.simpledb.roomleveldata.fechainicioeva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot2';
        saveInicioEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labeleva_user2: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot5';
        callback(options, event, context);
    },
    labeleva_bot5: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_user3: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_bot6: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot7';
        callback(options, event, context);
    },
    labeleva_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot8';
        callback(options, event, context);
    },
    labeleva_bot8: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_user5: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_bot9: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafineva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot10';
        saveFinEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.Ruta3 = {
    labelr3user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labelr3user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
    labelr3user3: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot3';
        callback(options, event, context);
    },
    labelr3user4: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot4';
        callback(options, event, context);
    },
    labelr3user5: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot5';
        callback(options, event, context);
    },
};

module.exports.R3Curso1 = {
    labelc1_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 3;
        context.simpledb.roomleveldata.curso = 1;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc1_bot3';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc1_bot3: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot5';
        callback(options, event, context);
    },
    labelc1_user2: (options, event, context, callback) => {
        options.next_state = 'labelc1_bot4';
        callback(options, event, context);
    },
    labelc1_bot17: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());        
        options.next_state = 'labelc1_user14';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R3Curso2 = {
    labelc2_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 3;
        context.simpledb.roomleveldata.curso = 2;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc2_bot3';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc2_bot3: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot5';
        callback(options, event, context);
    },
    labelc2_bot7: (options, event, context, callback) => {
        options.next_state = 'labelc2_user6';
        callback(options, event, context);
    },
    labelc2_user6: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot8';
        callback(options, event, context);
    },
    labelc2_bot15: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc2_user12';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R3Curso3 = {
    labelc3_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 3;
        context.simpledb.roomleveldata.curso = 3;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc3_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc3_bot12: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc3_user9';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R3Curso4 = {
    labelc4_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 3;
        context.simpledb.roomleveldata.curso = 4;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc4_bot3';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc4_bot3: (options, event, context, callback) => {
        options.next_state = 'labelc4_bot5';
        callback(options, event, context);
    },
    labelc4_user7: (options, event, context, callback) => {
        options.next_state = 'labelc4_bot10';
        callback(options, event, context);
    },
    labelc4_bot10: (options, event, context, callback) => {
        options.next_state = 'labelc4_user8';
        callback(options, event, context);
    },
    labelc4_user8: (options, event, context, callback) => {
        options.next_state = 'labelc4_bot11';
        callback(options, event, context);
    },
    labelc4_bot15: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());    
        options.next_state = 'labelc4_user12';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R3Evaluacion = {
    labeleva_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 3;
        context.simpledb.roomleveldata.curso = 5;
        context.simpledb.roomleveldata.fechainicioeva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot2';
        saveInicioEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labeleva_user2: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot5';
        callback(options, event, context);
    },
    labeleva_bot5: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_user3: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_bot6: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot7';
        callback(options, event, context);
    },
    labeleva_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot8';
        callback(options, event, context);
    },
    labeleva_bot8: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_user5: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_bot9: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafineva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot10';
        saveFinEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.Ruta4 = {
    labelr4_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labelr4_user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
    labelr4_user3: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot3';
        callback(options, event, context);
    },
    labelr4_user4: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot4';
        callback(options, event, context);
    },
};

module.exports.R4Curso1 = {
    labelc1_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 4;
        context.simpledb.roomleveldata.curso = 1;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc1_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc1_bot9: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc1_user7';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R4Curso2 = {
    labelc2_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 4;
        context.simpledb.roomleveldata.curso = 2;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc2_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc2_user5: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot9';
        callback(options, event, context);
    },
    labelc2_bot9: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot10';
        callback(options, event, context);
    },
    labelc2_user6: (options, event, context, callback) => {
        options.next_state = 'labelc2_bot10';
        callback(options, event, context);
    },
    labelc2_bot15: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc2_user10';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R4Curso3 = {
    labelc3_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 4;
        context.simpledb.roomleveldata.curso = 3;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc3_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc3_bot11: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc3_user7';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R4Evaluacion = {
    labeleva_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 4;
        context.simpledb.roomleveldata.curso = 4;
        context.simpledb.roomleveldata.fechainicioeva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot2';
        saveInicioEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labeleva_user2: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot5';
        callback(options, event, context);

    },
    labeleva_bot5: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_user3: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_bot6: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot7';
        callback(options, event, context);
    },
    labeleva_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot8';
        callback(options, event, context);
    },
    labeleva_bot8: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_user5: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_bot9: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafineva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot10';
        saveFinEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.Ruta5 = {
    labelr5_user1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot1';
        callback(options, event, context);
    },
    labelr5_user2: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot2';
        callback(options, event, context);
    },
    labelr5_user3: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot3';
        callback(options, event, context);
    },
    labelr5_user4: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot4';
        callback(options, event, context);
    },
    labelr5_user5: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        options.next_state = 'labellr_bot5';
        callback(options, event, context);
    },
};

module.exports.R5Curso1 = {
    labelc1_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 5;
        context.simpledb.roomleveldata.curso = 1;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc1_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc1_bot16: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc1_user10';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R5Curso2 = {
    labelc2_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 5;
        context.simpledb.roomleveldata.curso = 2;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc2_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc2_bot10: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc2_user7';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R5Curso3 = {
    labelc3_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 5;
        context.simpledb.roomleveldata.curso = 3;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc3_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc3_bot15: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc3_user9';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R5Curso4 = {
    labelc4_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 5;
        context.simpledb.roomleveldata.curso = 4;
        context.simpledb.roomleveldata.fechainicio = Math.floor(Date.now());
        options.next_state = 'labelc4_bot2';
        saveInicioCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labelc4_bot10: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafin = Math.floor(Date.now());     
        options.next_state = 'labelc4_user5';
        saveFinCurso(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

module.exports.R5Evaluacion = {
    labeleva_bot1: (options, event, context, callback) => {
        options.data.name = context.simpledb.roomleveldata.name;
        context.simpledb.roomleveldata.ruta = 5;
        context.simpledb.roomleveldata.curso = 5;
        context.simpledb.roomleveldata.fechainicioeva = Math.floor(Date.now());
        options.next_state = 'labeleva_bot2';
        saveInicioEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },     
    labeleva_user2: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot5';
        callback(options, event, context);
    },    
    labeleva_user3: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP1 = event.message;
        options.next_state = 'labeleva_bot6';
        callback(options, event, context);
    },
    labeleva_user4: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot8';
        callback(options, event, context);
    },    
    labeleva_user5: (options, event, context, callback) => {
        context.simpledb.roomleveldata.EvaP2 = event.message;
        options.next_state = 'labeleva_bot9';
        callback(options, event, context);
    },
    labeleva_bot14: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafineva = Math.floor(Date.now());
        options.next_state = 'labeleva_user9';
        saveFinEva(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
    labeleva_user9: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP1 = event.message;
        options.next_state = 'labeleva_bot15';
        callback(options, event, context);
    },
    labeleva_bot15: (options, event, context, callback) => {
        options.next_state = 'labeleva_user10';
        callback(options, event, context);
    },
    labeleva_user10: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP2 = event.message;
        options.next_state = 'labeleva_bot16';
        callback(options, event, context);
    },
    labeleva_user11: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP3 = event.message;
        options.next_state = 'labeleva_bot17';
        callback(options, event, context);
    },
    labeleva_bot17: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot18';
        callback(options, event, context);
    },
    labeleva_user12: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP3 = event.message;
        options.next_state = 'labeleva_bot18';
        callback(options, event, context);
    },
    labeleva_bot18: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot19';
        callback(options, event, context);
    },
    labeleva_user13: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP4 = event.message;
        options.next_state = 'labeleva_bot20';
        callback(options, event, context);
    },
    labeleva_bot20: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot21';
        callback(options, event, context);
    },
    labeleva_user14: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP4 = event.message;
        options.next_state = 'labeleva_bot21';
        callback(options, event, context);
    },
    labeleva_bot21: (options, event, context, callback) => {
        options.next_state = 'labeleva_user15';
        callback(options, event, context);
    },
    labeleva_user15: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP5 = event.message;
        options.next_state = 'labeleva_bot22';
        callback(options, event, context);
    },
    labeleva_bot22: (options, event, context, callback) => {
        options.next_state = 'labeleva_bot23';
        callback(options, event, context);
    },
    labeleva_user16: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP6 = event.message;
        options.next_state = 'labeleva_bot24';
        callback(options, event, context);
    },
    labeleva_bot24: (options, event, context, callback) => {
        options.next_state = 'labeleva_user19';
        callback(options, event, context);
    },
    labeleva_user17: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP6 = event.message;
        options.next_state = 'labeleva_bot25';
        callback(options, event, context);
    },
    labeleva_bot25: (options, event, context, callback) => {
        options.next_state = 'labeleva_user19';
        callback(options, event, context);
    },
    labeleva_user18: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP6 = event.message;
        options.next_state = 'labeleva_bot26';
        callback(options, event, context);
    },
    labeleva_bot26: (options, event, context, callback) => {
        options.next_state = 'labeleva_user19';
        callback(options, event, context);
    },
    labeleva_user19: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP7 = event.message;
        options.next_state = 'labeleva_bot27';
        callback(options, event, context);
    },
    labeleva_user20: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP8 = event.message;
        options.next_state = 'labeleva_bot28';
        callback(options, event, context);
    },
    labeleva_bot28: (options, event, context, callback) => {
        options.next_state = 'labeleva_user22';
        callback(options, event, context);
    },
    labeleva_user21: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP8 = event.message;
        options.next_state = 'labeleva_bot29';
        callback(options, event, context);
    },
    labeleva_bot29: (options, event, context, callback) => {
        options.next_state = 'labeleva_user22';
        callback(options, event, context);
    },
    labeleva_user22: (options, event, context, callback) => {
        context.simpledb.roomleveldata.R5EncuestaP9 = event.message;
        options.next_state = 'labeleva_bot30';
        callback(options, event, context);
    },
    labeleva_bot30: (options, event, context, callback) => {
        context.simpledb.roomleveldata.fechafinencuesta = Math.floor(Date.now());
        options.next_state = 'labeleva_user23';
        saveFinEncuesta(context.simpledb.roomleveldata, res => {
			callback(options, event, context);
		})
    },
};

const { google } = require('googleapis');
const serviceAccount = {
    "type": "service_account",
    "project_id": "chatbotmusa",
    "private_key_id": "1f835c38417c3d796e172eb7628fe36357e136ab",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDAyrYUHkFrDvn6\nPXYbNrblZIZTxWbCOtlkN28f3iLxznKMyRBlQILbRhNqpDjzA29k+PdQ1khBqSjL\nRuJ/9uSSA8tX1pMpQ3HzXK1NZ9h3m1U/hkuSYsa8GsJFWmx4bPwuD8QwzXmqi8aX\nto2YDOliRym2hEngTMwMwCaEd1MKABrQWNta4AAtOWDusf9cFJj6/BQQheGEZsJy\nczqtLiU4AdYz77zNWpTlfU2LXoSlCGVtIk7B91HnYPSbyieQ1Qsj3Ft+7JPD4J8M\nWno0lJ8qHhUxRCTQwTtqhc2D/LpMHLhggJmEdeSGMJossqzudSs7qDANl8+EJp80\nuSzj7Z8vAgMBAAECggEAPf+ScULPj9Gnowkr15GPXJKovfzP0GtjaJ6JDmr9utxE\nqzCnpKAL1N8itFsuczvqEUMdKXJXl0ICe+iGQ1eO5sPwmwVGmvD1DqmBk9Bu5Pvf\nfMe/usooFerXCb2L/2gw6tEoKveRBj7f9P8AZuLUFMZEzEybg1W/EuSiHlxPKHoT\nBHK2q2T70jxRdzYi65UOLvAP2Lehou+Jeiqdvo7QFwsJfwJy7TOX7wL0AV3vSYYv\nK0VoPsRN7RKJb5oaAv8kiVrzm3P7pwxa0z9moUZz8V+Lyz6dxSqbd0okwBfxlxC5\nGTp5G5rh2XSEvEHgutTJ6oU4+fbW4GnunkyEgewTwQKBgQD9cbPUdUIotqVGaEU1\nWBpkW+eGe6iLqUKv5dq41Ydi72dt89Zr/QOyUi+DfYs8arGCOhEXc/WL4e7a+/nu\nQgFracVdyWTxs/KMWytMRXx82n511L5FgGq7qSrME5pAOwb/BaDNoZkeXqkJz680\nJOz3Kdo9mPsiLFSIMWktb2U7wQKBgQDCvG1kpQlFfgwQIhXEjxhTjzUfCsxWc01E\n99a32FANoDwXxvi7juFIvB5Wayl/kCtIwN495GoFaS7+thowwWAPDvjJ2XcNJ3bd\npVH4KG0atx7aKRtKPRxpUkcXJ5SXocemAXXwYuoFS6TDNN3zU+bzmLxPWh2yQ/gS\nk5i/WFhW7wKBgBncIyw3drOuxzhi5UTnI3JACmSnc3AkqiBGhMW9S94lbVlDuwoz\nu8/TIPP6uF1Gyavu/tV0yIYoXHXNphfQdlKebTv/k6Qx5zq5Brb2lBgtNyAQwAVZ\ncAqL3UkLav7IxxL4YQr6RSRbJkZRAaCBcAhcJd+JH37CJTHsUL4JErxBAoGAE/uL\n6ij5Q5VEnZ8xxqK8Z06pr87G2xQn2Kzp7qGWzV8k63eybGSj/3e2UT3b20gq+OM5\nqvY2XunFNcPv+hLNzZ3Gr8fN7J6hFutw9tsHHxetZcuUDlEpCjG0M88O82RZfVJn\nDMzJoNN7S8CwCdkROOvyXt4rb/CDkzxsDy58micCgYBU+LvR+dBEmZooeq+WTE6e\nprbDc3zPPRtoWp00WEoC/KIhfOS9mK+/Q5BhCwNmgzaNFN5YT8wUo4nwxm9TFpl4\neIJ0H6WhYF8DSdCOIOKj3HPlbcVUMB2B0FmP+vivDRmCJUwYYLMe7QP6+UoNjfqM\nyjhu3yPZ7OVYw3Sh4T85xA==\n-----END PRIVATE KEY-----\n",
    "client_email": "chatbotmusa@chatbotmusa.iam.gserviceaccount.com",
    "client_id": "115916379795666357480",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/chatbotmusa%40chatbotmusa.iam.gserviceaccount.com"
};

const serviceAccountAuth = new google.auth.JWT({
email: serviceAccount.client_email,
key: serviceAccount.private_key,
scopes: 'https://www.googleapis.com/auth/spreadsheets'
});

const sheets = google.sheets('v4');

function saveRegistro(data, callbackFunction) {
console.log('save Registro in google sheet');
let range = 'Registro!A1';

let resArray = [data.name,data.phone,data.dni,data.fechareg];

sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);

    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}

function saveInicioCurso(data, callbackFunction) {
    console.log('save saveInicioCurso in google sheet');
    let range = 'Inicio Curso!A1';
    
    let resArray = [data.name,data.phone,data.fechainicio,data.ruta,data.curso];
    
    sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);
    
    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}

function saveFinCurso(data, callbackFunction) {
    console.log('save saveFinCurso in google sheet');
    let range = 'Fin Curso!A1';
    
    let resArray = [data.name,data.phone,data.fechafin,data.ruta,data.curso];
    
    sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);
    
    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}

function saveInicioEva(data, callbackFunction) {
    console.log('save saveInicioEva in google sheet');
    let range = 'Inicio Eva!A1';
    
    let resArray = [data.name,data.phone,data.fechainicioeva,data.ruta];
    
    sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);
    
    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}

function saveFinEva(data, callbackFunction) {
    console.log('save saveInicioEva in google sheet');
    let range = 'Fin Eva!A1';
    
    let resArray = [data.name,data.phone,data.fechafineva,data.ruta,data.EvaP1,data.EvaP2];
    
    sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);
    
    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}

function saveFinEncuesta(data, callbackFunction) {
    console.log('save saveFinEncuesta in google sheet');
    let range = 'Encuesta!A1';
    
    let resArray = [data.name,data.phone,data.fechafinencuesta,data.R5EncuestaP1,data.R5EncuestaP2,data.R5EncuestaP3,
        data.R5EncuestaP4,data.R5EncuestaP5,data.R5EncuestaP6,data.R5EncuestaP7,data.R5EncuestaP8,data.R5EncuestaP9];
    
    sheets.spreadsheets.values.append({
    auth: serviceAccountAuth,
    spreadsheetId: '16X5EyHV-f6Jmibnw8qSnvYzoAW4FaI_SZ5aJ9OfcTY0',
    range: range,
    valueInputOption: 'RAW',
    requestBody: {
        majorDimension: "ROWS",
        values: [
            resArray
        ],
    }
})
    .then(res => {
        console.log('RESPONSEEEEEEEEEEEEE', resArray, res);
        callbackFunction(res);
    
    })
    .catch(err => {
        console.log('Error saving date', err);
        callbackFunction(err);
    });
}
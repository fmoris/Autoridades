import { Injectable } from '@angular/core';
import { Autoridades } from '../interfaces/autoridades';

@Injectable({
  providedIn: 'root'
})
export class AutoridadesService {
  private auts: Autoridades[];

  constructor() {
    this.auts =
      [
        {
          "N": "1",
          "NOMBRE": "Joice Tabilo",
          "COMUNA": "CHAÑARAL",
          "REGION": "ATACAMA",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 4418 5978",
          "CORREO": "joice.tabilo.padilla@gmail.com"
        },
        {
          "N": "2",
          "NOMBRE": "Diego Vargas",
          "COMUNA": "CHAÑARAL",
          "REGION": "ATACAMA",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "959919613",
          "CORREO": "diegovargasperez88@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "3",
          "NOMBRE": "Valentina Caceres",
          "COMUNA": "RANCAGUA",
          "REGION": "OHIGGINS",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 5801 1794",
          "CORREO": "valentina.caceres@pregrado.uoh.cl",
          "MAYORIA": "*"
        },
        {
          "N": "4",
          "NOMBRE": "Patricio Zamorano",
          "COMUNA": "PEUMO",
          "REGION": "OHIGGINS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8287 6737",
          "CORREO": "patoza1980@gmail.com"
        },
        {
          "N": "5",
          "NOMBRE": "Emerson Avendano ",
          "COMUNA": "RANCAGUA",
          "REGION": "OHIGGINS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7761 4632",
          "CORREO": "emeavendano@gmail.com"
        },
        {
          "N": "6",
          "NOMBRE": "Blanca Rivas",
          "COMUNA": "BUIN",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 7905 6840",
          "CORREO": "brivas@buin.cl"
        },
        {
          "N": "7",
          "NOMBRE": "Josefina Osorio",
          "COMUNA": "CERRILLOS",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 3003 7308",
          "CORREO": "josefinaosoriooviedo@gmail.com"
        },
        {
          "N": "8",
          "NOMBRE": "Denisse Palacios",
          "COMUNA": "CONCHALÍ",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "966116384",
          "CORREO": "Dennisse.palacios86@gmail.com"
        },
        {
          "N": "9",
          "NOMBRE": "Nicol Sepulveda",
          "COMUNA": "EL BOSQUE",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 9575 7469",
          "CORREO": "nicol.jsepulveda.h@gmail.com"
        },
        {
          "N": "10",
          "NOMBRE": "Karina Soto",
          "COMUNA": "HUECHURABA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8149 3457",
          "CORREO": "karina.soto@huechuraba.cl"
        },
        {
          "N": "11",
          "NOMBRE": "Pamela Ruiz",
          "COMUNA": "LA CISTERNA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "946139052",
          "CORREO": "terapiasdamor777@gmail.com"
        },
        {
          "N": "12",
          "NOMBRE": "Eugenia Hermosilla",
          "COMUNA": "LA FLORIDA",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "949310610",
          "CORREO": "hpeugenia@gmail.com"
        },
        {
          "N": "13",
          "NOMBRE": "Sandra Chacon",
          "COMUNA": "LA PINTANA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "986836199",
          "CORREO": "Sandraganesh@hotmail.com"
        },
        {
          "N": "14",
          "NOMBRE": "Carolina Mena",
          "COMUNA": "LO ESPEJO",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "964633827",
          "CORREO": "carolina.mena.munoz@gmail.com"
        },
        {
          "N": "15",
          "NOMBRE": "Paulina Torres",
          "COMUNA": "MACUL",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 5709 0639",
          "CORREO": "paulina.torres@live.com"
        },
        {
          "N": "16",
          "NOMBRE": "Alejandra Salinas",
          "COMUNA": "MAIPÚ",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "981572191",
          "CORREO": "janysalinasinos@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "17",
          "NOMBRE": "Debora Carvallo",
          "COMUNA": "ÑUÑOA",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "997932790",
          "CORREO": "carvallo.deborah@gmail.com"
        },
        {
          "N": "18",
          "NOMBRE": "Alexandra Arancibia",
          "COMUNA": "QUILICURA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7773 4216",
          "CORREO": "alexandra.arancibia.olea@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "19",
          "NOMBRE": "Cindy Pardo",
          "COMUNA": "SAN MIGUEL",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 4512 3207",
          "CORREO": "cindypardoconcejal@gmail.com"
        },
        {
          "N": "20",
          "NOMBRE": "Marcela Urquiza",
          "COMUNA": "SANTIAGO",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 6653 7924",
          "CORREO": "mmurquizad@gmail.com"
        },
        {
          "N": "21",
          "NOMBRE": "Marcelo Alvarez",
          "COMUNA": "BUIN",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 8299 5045",
          "CORREO": "marcelodebuin@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "22",
          "NOMBRE": "Jose Luis Diaz",
          "COMUNA": "LA GRANJA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "56946205174",
          "CORREO": "jose.infocomex@gmail.com"
        },
        {
          "N": "23",
          "NOMBRE": "Gonzalo Ponce",
          "COMUNA": "MAIPÚ",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "56997035606",
          "CORREO": "gonzaloponceborquez@gmail.com"
        },
        {
          "N": "24",
          "NOMBRE": "Nicolas Quiroz",
          "COMUNA": "QUILICURA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 6511 6602",
          "CORREO": "nicolasquiroz@gmail.com"
        },
        {
          "N": "25",
          "NOMBRE": "Claudio Tapia",
          "COMUNA": "SAN RAMON",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 5738 0315",
          "CORREO": "claudiotapiaabogado@gmail.com"
        },
        {
          "N": "26",
          "NOMBRE": "Pamela García",
          "COMUNA": "PEÑALOLÉN",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8136 8791",
          "CORREO": "pgarciaroman@gmail.com"
        },
        {
          "N": "28",
          "NOMBRE": "Marina Crisóstomo",
          "COMUNA": "CHILLÁN",
          "REGION": "ÑUBLE",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 5758 2685",
          "CORREO": "concejalamarinacrisostomo@gmail.com"
        },
        {
          "N": "29",
          "NOMBRE": "Israel Parra",
          "COMUNA": "QUIRIHUE",
          "REGION": "ÑUBLE",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8125 1009",
          "CORREO": "israelpherna@gmail.com"
        },
        {
          "N": "30",
          "NOMBRE": "Pedro Concha",
          "COMUNA": "TREHUACO",
          "REGION": "ÑUBLE",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7730 2134",
          "CORREO": "pedro9832@gmail.com"
        },
        {
          "N": "31",
          "NOMBRE": "Mayerlin Suárez",
          "COMUNA": "CHIGUAYANTE",
          "REGION": "BIOBÍO",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 7425 5137",
          "CORREO": "mayersuarezsilva@gmail.com"
        },
        {
          "N": "32",
          "NOMBRE": "Andrea De La Barra",
          "COMUNA": "CONCEPCIÓN",
          "REGION": "BIOBÍO",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 5682 0507",
          "CORREO": "andreadelabarramanriquez@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "33",
          "NOMBRE": "Nadia Garrido",
          "COMUNA": "CONCEPCIÓN",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 9243 6369",
          "CORREO": "ngarrido80@gmail.com"
        },
        {
          "N": "34",
          "NOMBRE": "Romina Medina",
          "COMUNA": "HUALPÉN",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8703 3166",
          "CORREO": "rominamedina.c@gmail.com"
        },
        {
          "N": "35",
          "NOMBRE": "Paula Opazo",
          "COMUNA": "SAN PEDRO DE LA PAZ",
          "REGION": "BIOBÍO",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 8840 0817",
          "CORREO": "p.opazonova@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "36",
          "NOMBRE": "Edgar Navarrete",
          "COMUNA": "SAN PEDRO DE LA PAZ",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 9301 2398",
          "CORREO": "edgarnavarretemontecino@gmail.com"
        },
        {
          "N": "37",
          "NOMBRE": "Valeria Vargas",
          "COMUNA": "TALCAHUANO",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8983 9558",
          "CORREO": "valeriia.vd@hotmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "38",
          "NOMBRE": "Pablo Oliva",
          "COMUNA": "TOMÉ",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "MAYORIA": "*"
        },
        {
          "N": "39",
          "NOMBRE": "Felipe Romero",
          "COMUNA": "TOMÉ",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía"
        },
        {
          "N": "40",
          "NOMBRE": "Juan Godoy",
          "COMUNA": "YUMBEL",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía"
        },
        {
          "N": "41",
          "NOMBRE": "Alejandra Contreras",
          "COMUNA": "CHOLCHOL",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7829 4021",
          "CORREO": "acont.mellico@gmail.com"
        },
        {
          "N": "42",
          "NOMBRE": "Viviana Díaz",
          "COMUNA": "TEMUCO",
          "REGION": "ARAUCANÍA",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 5606 8247",
          "CORREO": "vivianaedithdiaz@gmail.com"
        },
        {
          "N": "43",
          "NOMBRE": "Mario Cayo",
          "COMUNA": "TOLTÉN",
          "REGION": "ARAUCANÍA",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7553 0525",
          "CORREO": "mario.cayom@gmail.com"
        },
        {
          "N": "44",
          "NOMBRE": "Cecilia Canales",
          "COMUNA": "OSORNO",
          "REGION": "LOS LAGOS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 6842 7314",
          "CORREO": "ceciandreacanalesrosas@gmail.com"
        },
        {
          "N": "45",
          "NOMBRE": "Juan Carlos Cuitiño",
          "COMUNA": "PUERTO MONTT",
          "REGION": "LOS LAGOS",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 7798 1601",
          "CORREO": "karlosvet@gmail.com"
        },
        {
          "N": "46",
          "NOMBRE": "Omar Pérez",
          "COMUNA": "SAN JUAN DE LA COSTA",
          "REGION": "LOS LAGOS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8286 3650",
          "CORREO": "d.m.seron@gmail.com"
        },
        {
          "N": "47",
          "NOMBRE": "Marcelo Cheuquián",
          "COMUNA": "SAN JUAN DE LA COSTA",
          "REGION": "LOS LAGOS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8971 8456",
          "CORREO": "m.cheuquian@gmail.com",
          "MAYORIA": "*"
        },
        {
          "N": "48",
          "NOMBRE": "Félix González",
          "COMUNA": "DISTRITO 20",
          "REGION": "BIOBÍO",
          "PEV": "PEV",
          "CARGO": "Diputado",
          "CORREO": "felix.gonzalez@congreso.cl "
        },
        {
          "N": "49",
          "NOMBRE": "Krist Naranjo",
          "COMUNA": "REGIÓN DE COQUIMBO",
          "REGION": "COQUIMBO",
          "PEV": "IND",
          "CARGO": "Gobernadora Regional",
          "CORREO": "krist.naranjo.eco2021@gmail.com"
        }
      ]

  }

  getAutoridades(): Autoridades[] {
    return this.auts;
  }
}

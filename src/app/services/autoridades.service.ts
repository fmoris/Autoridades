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
          "CORREO": "joice.tabilo.padilla@gmail.com",
          "IMG": "https://drive.google.com/file/d/1znAxqdJi1Ngq8ACCwk0yUU0QYO3swOY_/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/10h0L6khEYacCNe2o4ltouintvxSwln7y/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1lGYpYoAD_HiQg58kQJ1GKQef3gbdHnd1/view?usp=sharing"
      },
      {
          "N": "4",
          "NOMBRE": "Patricio Zamorano",
          "COMUNA": "PEUMO",
          "REGION": "OHIGGINS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8287 6737",
          "CORREO": "patoza1980@gmail.com",
          "IMG": "https://drive.google.com/file/d/1nXJwxV4frWFan3hY47ifCnQRfTHuP9K_/view?usp=sharing"
      },
      {
          "N": "5",
          "NOMBRE": "Emerson Avendaño ",
          "COMUNA": "RANCAGUA",
          "REGION": "OHIGGINS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 7761 4632",
          "CORREO": "emeavendano@gmail.com",
          "IMG": "https://drive.google.com/file/d/1BBxBapbEerjCGNAM8w-aSm-C_fou89D7/view?usp=sharing"
      },
      {
          "N": "6",
          "NOMBRE": "Blanca Rivas",
          "COMUNA": "BUIN",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 7905 6840",
          "CORREO": "brivas@buin.cl",
          "IMG": "https://drive.google.com/file/d/1c2LxB9v-hRrRGQ3DLnSvciJ9nlNVs112/view?usp=sharing"
      },
      {
          "N": "7",
          "NOMBRE": "Josefina Osorio",
          "COMUNA": "CERRILLOS",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 3003 7308",
          "CORREO": "josefinaosoriooviedo@gmail.com",
          "IMG": "https://drive.google.com/file/d/1xfROUFSho455rsqXxdM1K1X4xYXTBhGW/view?usp=sharing"
      },
      {
          "N": "8",
          "NOMBRE": "Denisse Palacios",
          "COMUNA": "CONCHALÍ",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "966116384",
          "CORREO": "Dennisse.palacios86@gmail.com",
          "IMG": "https://drive.google.com/file/d/1Af8dHXKjTywfI-c8d43SoZCxNNnu8pKb/view?usp=sharing"
      },
      {
          "N": "9",
          "NOMBRE": "Nicol Sepulveda",
          "COMUNA": "EL BOSQUE",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 9575 7469",
          "CORREO": "nicol.jsepulveda.h@gmail.com",
          "IMG": "https://drive.google.com/file/d/1LcyfE92bKg4EVayIX-DTiYjInc9MsCMt/view?usp=sharing"
      },
      {
          "N": "10",
          "NOMBRE": "Karina Soto",
          "COMUNA": "HUECHURABA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8149 3457",
          "CORREO": "karina.soto@huechuraba.cl",
          "IMG": "https://drive.google.com/file/d/1K3JJDvrhnoNvWiT4kIvwAawOyhjJO93r/view?usp=sharing"
      },
      {
          "N": "11",
          "NOMBRE": "Pamela Ruiz",
          "COMUNA": "LA CISTERNA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "946139052",
          "CORREO": "terapiasdamor777@gmail.com",
          "IMG": "https://drive.google.com/file/d/1MgNBcsqi6gJ4h1LzYuzb-8zLgVeNqutC/view?usp=sharing"
      },
      {
          "N": "12",
          "NOMBRE": "Eugenia Hermosilla",
          "COMUNA": "LA FLORIDA",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "949310610",
          "CORREO": "hpeugenia@gmail.com",
          "IMG": "https://drive.google.com/file/d/1XpzwzGfznul_fSWGQ4uNVLXbq67vZqu0/view?usp=sharing"
      },
      {
          "N": "13",
          "NOMBRE": "Sandra Chacon",
          "COMUNA": "LA PINTANA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "986836199",
          "CORREO": "Sandraganesh@hotmail.com",
          "IMG": "https://drive.google.com/file/d/1p4wxXA0EVpmS5VgeT5a1k6j_XkwPPhT9/view?usp=sharing"
      },
      {
          "N": "14",
          "NOMBRE": "Carolina Mena",
          "COMUNA": "LO ESPEJO",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "964633827",
          "CORREO": "carolina.mena.munoz@gmail.com",
          "IMG": "https://drive.google.com/file/d/13KNVakPLAt9ij9kt4ddNIlOE-ENFAWXc/view?usp=sharing"
      },
      {
          "N": "15",
          "NOMBRE": "Paulina Torres",
          "COMUNA": "MACUL",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 5709 0639",
          "CORREO": "paulina.torres@live.com",
          "IMG": "https://drive.google.com/file/d/1Gm4EcYsGPd8B21Ain0WwZ0PMtQh1arBg/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1sRi8fPtc11dc86pAvraDSokIWJ6YWrvt/view?usp=sharing"
      },
      {
          "N": "17",
          "NOMBRE": "Debora Carvallo",
          "COMUNA": "ÑUÑOA",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "997932790",
          "CORREO": "carvallo.deborah@gmail.com",
          "IMG": "https://drive.google.com/file/d/11tnFCKMIJqDqZB7Td38EHhq65ZF9Fwpb/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1wbsBT6z5jSgKIkFs0KBb65qe-oh_AxL7/view?usp=sharing"
      },
      {
          "N": "19",
          "NOMBRE": "Cindy Pardo",
          "COMUNA": "SAN MIGUEL",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 4512 3207",
          "CORREO": "cindy.pardo.c@sanmiguel.cl",
          "IMG": "https://drive.google.com/file/d/1wQ76thNbP0_-KXeArJ5Phr4wLQJprZXy/view?usp=sharing"
      },
      {
          "N": "20",
          "NOMBRE": "Marcela Urquiza",
          "COMUNA": "SANTIAGO",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 6653 7924",
          "CORREO": "mmurquizad@gmail.com",
          "IMG": "https://drive.google.com/file/d/1wmgps_irZBUWpz3j2C4gp7gVwbWzaNre/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1r6IToHJpCcTuczn7KYWSUJjclKnWqzaR/view?usp=sharing"
      },
      {
          "N": "22",
          "NOMBRE": "Jose Luis Diaz",
          "COMUNA": "LA GRANJA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "56946205174",
          "CORREO": "jose.infocomex@gmail.com",
          "IMG": "https://drive.google.com/file/d/1P2Rta5QxiqAQNx61opxPQLm6UMjqYAgL/view?usp=sharing"
      },
      {
          "N": "23",
          "NOMBRE": "Gonzalo Ponce",
          "COMUNA": "MAIPÚ",
          "REGION": "RM",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "56997035606",
          "CORREO": "gonzaloponceborquez@gmail.com",
          "IMG": "https://drive.google.com/file/d/12SK6A276Hs2r2dQc3l8hCrpeVdrzHfaI/view?usp=sharing"
      },
      {
          "N": "24",
          "NOMBRE": "Nicolas Quiroz",
          "COMUNA": "QUILICURA",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 6511 6602",
          "CORREO": "nicolasquiroz@gmail.com",
          "IMG": "https://drive.google.com/file/d/1g0-wT-JxUehDt_D13kyRCUHUl0osK9xS/view?usp=sharing"
      },
      {
          "N": "25",
          "NOMBRE": "Claudio Tapia",
          "COMUNA": "SAN RAMON",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 5738 0315",
          "CORREO": "claudiotapiaabogado@gmail.com",
          "IMG": "https://drive.google.com/file/d/1VmzQYVkEUWJoBqguQJY3Ehf5dE2Z-QKj/view?usp=sharing"
      },
      {
          "N": "26",
          "NOMBRE": "Pamela García",
          "COMUNA": "PEÑALOLÉN",
          "REGION": "RM",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8136 8791",
          "CORREO": "pamela.garcia@penalolen.cl",
          "IMG": "https://drive.google.com/file/d/1K9geCjte8J2kAc-hCqNBy2Av3A9uimiw/view?usp=sharing"
      },
      {
          "N": "28",
          "NOMBRE": "Marina Crisóstomo",
          "COMUNA": "CHILLÁN",
          "REGION": "ÑUBLE",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 5758 2685",
          "CORREO": "concejalamarinacrisostomo@gmail.com",
          "IMG": "https://drive.google.com/file/d/1Swiib0fsFEsuKv87ulOjs3oYNaOSf3W3/view?usp=sharing"
      },
      {
          "N": "29",
          "NOMBRE": "Israel Parra",
          "COMUNA": "QUIRIHUE",
          "REGION": "ÑUBLE",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8125 1009",
          "CORREO": "israelpherna@gmail.com",
          "IMG": "https://drive.google.com/file/d/1yk0ulPAw4gWTf9DciP_qM6O2M4uyqGGH/view?usp=sharing"
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
          "CORREO": "mayersuarezsilva@gmail.com",
          "IMG": "https://drive.google.com/file/d/1ltpWvWxmnxuLcgnDpJEj-Knobu-tSB9J/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1yXqtVAOTyxbw8RBeqNb_S8EwVteonIJW/view?usp=sharing"
      },
      {
          "N": "33",
          "NOMBRE": "Nadia Garrido",
          "COMUNA": "CONCEPCIÓN",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 9243 6369",
          "CORREO": "nadiagarridoconcejal@gmail.com",
          "IMG": "https://drive.google.com/file/d/1-Jf080a_xtjyiJ7jm1A5c4mEvQFsXf4i/view?usp=sharing"
      },
      {
          "N": "34",
          "NOMBRE": "Romina Medina",
          "COMUNA": "HUALPÉN",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8703 3166",
          "CORREO": "romina.medina@hualpenciudad.cl",
          "IMG": "https://drive.google.com/file/d/1S_tmWA-7bisLJZUh6nkjfgv0X0qNnjkQ/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1xo7Ddw41WMGpZoo_x0ndiHZX1Dt_h6kl/view?usp=sharing"
      },
      {
          "N": "36",
          "NOMBRE": "Edgar Navarrete",
          "COMUNA": "SAN PEDRO DE LA PAZ",
          "REGION": "BIOBÍO",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 9301 2398",
          "CORREO": "edgarnavarretemontecino@gmail.com",
          "IMG": "https://drive.google.com/file/d/1NNWl_4T3UB1C_mnAyECemuOi5Lq90R47/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1slISjLHutpL6zdrj5csW7iZ5HjyIrp1v/view?usp=sharing"
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
          "REGION": "ARAUCANÍA",
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
          "CORREO": "vivianaedithdiaz@gmail.com",
          "IMG": "https://drive.google.com/file/d/1quMXGsmlpVAt8UtKQUjTLKljlpP4H52q/view?usp=sharing"
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
          "CORREO": "ceciandreacanalesrosas@gmail.com",
          "IMG": "https://drive.google.com/file/d/1XrlinLeQvswu-BFdYxNsZuJOQNYot5L6/view?usp=sharing"
      },
      {
          "N": "45",
          "NOMBRE": "Juan Carlos Cuitiño",
          "COMUNA": "PUERTO MONTT",
          "REGION": "LOS LAGOS",
          "PEV": "PEV",
          "CARGO": "Concejalía",
          "CELULAR": "9 7798 1601",
          "CORREO": "karlosvet@gmail.com",
          "IMG": "https://drive.google.com/file/d/1ozBBz04BIno6SXQb5uqkHNyGrwhi952j/view?usp=sharing"
      },
      {
          "N": "46",
          "NOMBRE": "Omar Pérez",
          "COMUNA": "SAN JUAN DE LA COSTA",
          "REGION": "LOS LAGOS",
          "PEV": "IND",
          "CARGO": "Concejalía",
          "CELULAR": "9 8286 3650",
          "CORREO": "d.m.seron@gmail.com",
          "IMG": "https://drive.google.com/file/d/143RLJLVei5TQW27PVwiy6JuBcTNaE-MX/view?usp=sharing"
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
          "MAYORIA": "*",
          "IMG": "https://drive.google.com/file/d/1sMN0e-mqX4HiiDG5Or26UQucdH_5DbNr/view?usp=sharing"
      },
      {
          "N": "48",
          "NOMBRE": "Félix González",
          "COMUNA": "DISTRITO 20",
          "REGION": "BIOBÍO",
          "PEV": "PEV",
          "CARGO": "Diputado",
          "CORREO": "felix.gonzalez@congreso.cl ",
          "IMG": "https://drive.google.com/file/d/1vVdKrm6jg5gho2iHxrmUeV4wh5ULQCTC/view?usp=sharing"
      },
      {
          "N": "49",
          "NOMBRE": "Krist Naranjo",
          "COMUNA": "REGIÓN DE COQUIMBO",
          "REGION": "COQUIMBO",
          "PEV": "IND",
          "CARGO": "Gobernadora Regional",
          "CORREO": "krist.naranjo.eco2021@gmail.com",
          "IMG": "https://drive.google.com/file/d/1zS3r4VqLbLMjz0lE9xeQ0YJUq1ejjmfl/view?usp=sharing"
      }
  ]

  }

  getAutoridades(): Autoridades[] {
    return this.auts;
  }
}

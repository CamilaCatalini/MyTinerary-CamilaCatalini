import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const GaleryCities = () => {

    const info_cities = [{  id : '0',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-705/a_imago_st_030819400037_54998_cordo-a.jpg',
                            title: 'Mezquita Sheikh Zayed, Abu Dhabi, Emiratos Árabes Unidos',  
                            info: 'Célebre por su color blanco puro y la fusión de las diferentes arquitecturas islámicas en un solo templo, este inmenso templo con una superficie de 22.412 m2 y capacidad para más de cuarenta mil fieles, está considerada como la estructura de mármol más grande jamás construida por el hombre. Abrió sus puertas en el año 2007.'
                          },
                          { id : '1',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-708/a_Petr-a.jpg',
                            title: 'Petra, Wadi Musa, Jordania',  
                            info: 'Abandonada por los nabateos, tan crecidos por su riqueza y su habilidad comercial que osaron desafiar al poder de Roma, Petra aparece como una visión onírica tras cruzar a pie, o en burro, el desfiladero del Siq que protege su entrada. Sus fachadas de aires grecorromanos labradas en las rocas del desierto hacen de ella una de las ruinas más románticas, declarada Patrimonio de la Humanidad en 1985.'
                          },
                          { id : '2',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-692/a_beijing-la-gran-muralla-a.jpg',
                            title: 'Gran Muralla China en Mutianyu, Pekín',  
                            info: 'Es el símbolo más reconocible de China, del voluntarismo de sus habitantes y también de su aislamiento secular. En una sencilla excursión desde Pekín puede caminarse por lo alto de algunos de los tramos mejor conservados de esta mole infinita que serpentea por las montañas del Norte del país.'
                          },
                          { id : '3',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-714/a_WDC036_cordo-a.jpg',
                            title: 'Piscina reflectante del monumento a Lincoln, Washington D.C.',  
                            info: 'Uno de los lugares que uno no se puede perder en Washington es el Lincoln Memorial. Desde este edificio de estilo revival griego, situado en la zona conocida como National Mall y construido para honrar la memoria del presidente Abraham Lincoln, se ven perfectamente alineados, la piscina reflectante, el monumento a George Washington (obelisco) y el Capitolio al fondo.'
                          },
                          { id : '4',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-713/a_Vista-de-la-Alhambra-desde-el-Albaici-a.jpg',
                            title: 'La Alhambra, Granada',  
                            info: 'Este mito imperecedero, este palacio de ensueño, el más pregonado y enaltecido de todos los tiempos, es también un enigmático cofre de leyendas románticas y secretos. Ocupa el puesto 16º del mundo y el sexto de Europa.'
                          },
                          { id : '5',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-708/a_Petr-a.jpg',
                            title: 'Templo Dorado, Amritsar, India',  
                            info: 'Desde cualquiera de sus ángulos el que es el lugar más sagrado del sikhismo, practicado por 25 millones de personas, resulta imponente. Recubierto de mármol y laminado en oro su silueta se refleja en las aguas del estanque del amrit, sobre el que se eleva desde una plataforma.'
                          },  
                          { id : '6',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-696/a_DellaHuff_PRESS-a.jpg',
                            title: 'Puente Golden Gate, San Francisco',  
                            info: 'Pocas estructuras modernas han inspirado tantos guiones cinematográficos como esta sinfonía de acero y color anaranjado que cruza la bahía de San Francisco. Ni tanta literatura. De día, de noche y, como casi siempre, con niebla, esta proeza de la ingeniería que une esta gran ciudad con el condado de Mari en California, es también el más retratado.'
                          },
                          { id : '7',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-694/a_corcovad-a.jpg',
                            title: 'Estatua de Cristo Redentor, Río de Janeiro',  
                            info: 'Vigilante sobre la cima del monte Corcovado, a 709 metros de altitud, el que es el gran emblema brasileño observa con los brazos abiertos una de las panorámicas más impresionantes de la bahía de Guanabara.'
                          },
                          { id : '8',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-701/a_gtres_a00512313_001-a.jpg',
                            title: 'Teotihuacán, San Juan Teotihuacán, México',  
                            info: 'La también llamada Ciudad de los Dioses conserva los vestigios de una de las civilizaciones más importantes de Mesoamérica. Un paseo por la zona arqueológica permite asombrarse por las hermosas construcciones y por el misterio que guardan los muros de la Pirámide del Sol, el templo de Quetzalpápalotl, la Calzada de los Muertos y las edificaciones que los rodean.'
                          },
                          { id : '9',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-700/a_gtres_a00498537_042-a.jpg',
                            title: ' Iglesia del Salvador sobre la Sangre Derramada, San Petersburgo',  
                            info: 'Es el hito más significativo en el centro histórico de la ciudad y su icónica figura destaca en el perfil urbano. Su interior encierra la colección de mosaicos más extensa del mundo, superando incluso a San Marcos de Venecia. Esta iglesia ortodoxa rinde homenaje al sitio donde fuera asesinado el zar Alejandro II, junto al canal Gribaedova y junto al jardín Mikhailkovski, hoy parte del Museo Ruso.'
                          },
                          { id : '10',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-710/a_sidne-a.jpg',
                            title: ' Sydney Harbour Bridge, Sidney',  
                            info: 'Es uno de los iconos de Sidney. Inaugurado en 1932 con el objetivo de unir el norte y el sur de la ciudad, fue durante mucho tiempo el puente en arco más largo del mundo. Hoy una de sus torres tiene un mirador desde donde se puede disfrutar de una panorámica excelente de la ciudad.'
                          },
                          { id : '11',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg',
                            title: ' Machu Picchu, Perú',  
                            info: 'A 130 kilómetros de Cuzco, la Ciudad Perdida de los incas se alza entre barrancos en mitad de un paraje inaccesible de los Andes peruanos. La perfección de sus construcciones, su conservación y su escenario natural, encajonado en la cresta de un cerro sobre el valle del río Urubamba, hacen de este yacimiento uno de los tesoros arqueológicos más valiosos del mundo y, desde luego, uno de los más místicos.'
                          },
                          { id : '12',
                          img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg',
                          title: ' Machu Picchu, Perú',  
                          info: 'A 130 kilómetros de Cuzco, la Ciudad Perdida de los incas se alza entre barrancos en mitad de un paraje inaccesible de los Andes peruanos. La perfección de sus construcciones, su conservación y su escenario natural, encajonado en la cresta de un cerro sobre el valle del río Urubamba, hacen de este yacimiento uno de los tesoros arqueológicos más valiosos del mundo y, desde luego, uno de los más místicos.'
                          },
                          { id : '13',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg',
                            title: ' Machu Picchu, Perú',  
                            info: 'A 130 kilómetros de Cuzco, la Ciudad Perdida de los incas se alza entre barrancos en mitad de un paraje inaccesible de los Andes peruanos. La perfección de sus construcciones, su conservación y su escenario natural, encajonado en la cresta de un cerro sobre el valle del río Urubamba, hacen de este yacimiento uno de los tesoros arqueológicos más valiosos del mundo y, desde luego, uno de los más místicos.'
                          },
                          { id : '14',
                            img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg',
                            title: ' Machu Picchu, Perú',  
                            info: 'A 130 kilómetros de Cuzco, la Ciudad Perdida de los incas se alza entre barrancos en mitad de un paraje inaccesible de los Andes peruanos. La perfección de sus construcciones, su conservación y su escenario natural, encajonado en la cresta de un cerro sobre el valle del río Urubamba, hacen de este yacimiento uno de los tesoros arqueológicos más valiosos del mundo y, desde luego, uno de los más místicos.'
                          }]

    return (
        <Container>
              <Row>
                {info_cities.map(i => 
                  <Col lg="3" xs="4" className='py-1'>
                    <img src={i.img}></img>
                    <div className='info-place'>
                      <p className='title'><b>{i.title}</b></p>
                    </div>
                  </Col>
                )}
              </Row>
        </Container>
    );
  };
  
  export default GaleryCities;
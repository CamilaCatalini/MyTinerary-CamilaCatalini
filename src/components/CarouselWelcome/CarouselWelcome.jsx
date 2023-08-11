import Carousel from 'react-bootstrap/Carousel';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './carouselWelcome.css'

function IndividualIntervalsExample() {

  const info_carousel = [{ slide : '0',
                            info_slide : [{ img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-705/a_imago_st_030819400037_54998_cordo-a.jpg',
                            title: 'Sheikh Zayed Mosque, Abu Dhabi, United Arab Emirates',
                            info: 'Celebrated for its pure white color and the fusion of different Islamic architectures in a single temple, this immense temple with a surface area of ​​22,412 m2 and a capacity for more than forty thousand worshippers, is considered the largest marble structure ever built by man. It opened its doors in 2007.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-708/a_Petr-a.jpg',
                            title: 'Petra, Wadi Musa, Jordan',
                            info: 'Abandoned by the Nabateans, so grown by their wealth and commercial skills that they dared to challenge the power of Rome, Petra appears as a dream vision after crossing on foot, or on a donkey, the Siq gorge that protects its entrance. Its Greco-Roman facades carved into the desert rocks make it one of the most romantic ruins, declared a World Heritage Site in 1985.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-692/a_beijing-la-gran-muralla-a.jpg',
                            title: 'Great Wall of China at Mutianyu, Beijing',
                            info: 'It is the most recognizable symbol of China, of the voluntarism of its inhabitants and also of its secular isolation. In a simple excursion from Beijing you can walk on top of some of the best preserved sections of this infinite mass that meanders through the mountains of the North of the country.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-714/a_WDC036_cordo-a.jpg',
                            title: 'Lincoln Memorial Reflecting Pool, Washington D.C.',
                            info: 'One of the places that one cannot miss in Washington is the Lincoln Memorial. From this Greek revival-style building, located in the area known as the National Mall and built to honor the memory of President Abraham Lincoln, the reflecting pool, the George Washington Monument (obelisk) and the Capitol in the background are perfectly aligned. '
                          }],
                        },
                        { slide : '1',
                            info_slide : [{ img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-713/a_Vista-de-la-Alhambra-desde-el-Albaici-a.jpg',
                            title: 'The Alhambra, Granada',
                            info: 'This imperishable myth, this dream palace, the most proclaimed and exalted of all time, is also an enigmatic chest of romantic legends and secrets. It ranks 16th in the world and sixth in Europe.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-708/a_Petr-a.jpg',
                            title: 'Golden Temple, Amritsar, India',
                            info: 'From any of its angles, what is the holiest place of Sikhism, practiced by 25 million people, is impressive. Covered in marble and laminated with gold, its silhouette is reflected in the waters of the amrit pool, on which it stands from a platform.'
                          },  
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-696/a_DellaHuff_PRESS-a.jpg',
                            title: 'Golden Gate Bridge, San Francisco',
                            info: 'Few modern structures have inspired as many movie scripts as this symphony of steel and orange that crosses the San Francisco Bay. Not so much literature. By day, by night and, as almost always, with fog, this feat of engineering that connects this great city with Mari County in California, is also the most photographed.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-694/a_corcovad-a.jpg',
                            title: 'Statue of Christ the Redeemer, Rio de Janeiro',
                            info: 'A watchman on the top of Mount Corcovado, at an altitude of 709 meters, the great Brazilian emblem observes with open arms one of the most impressive views of Guanabara Bay.'
                          }],
                        },
                        { slide : '2',
                            info_slide : [{ img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-701/a_gtres_a00512313_001-a.jpg',
                            title: 'Teotihuacán, San Juan Teotihuacán, Mexico',
                            info: 'The also called City of the Gods preserves the vestiges of one of the most important civilizations of Mesoamerica. A walk through the archaeological zone allows one to be amazed by the beautiful constructions and by the mystery that the walls of the Pyramid of the Sun, the temple of Quetzalpápalotl, the Calzada de los Muertos and the buildings that surround them keep.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-700/a_gtres_a00498537_042-a.jpg',
                            title: ' Church of the Savior on Spilled Blood, Saint Petersburg',
                            info: 'It is the most significant landmark in the historic center of the city and its iconic figure stands out in the urban profile. Its interior contains the most extensive collection of mosaics in the world, surpassing even San Marcos in Venice. This Orthodox church pays homage to the site where Tsar Alexander II was assassinated, next to the Gribaedova Canal and next to the Mikhailkovski Garden, today part of the Russian Museum.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-710/a_sidne-a.jpg',
                            title: ' Sydney Harbor Bridge, Sydney',
                            info: 'It is one of Sydneys icons. Opened in 1932 with the aim of linking the north and south of the city, it was for a long time the longest arch bridge in the world. Today one of its towers has a viewpoint from where you can enjoy an excellent view of the city.'
                          },
                          { img: 'https://www.hola.com/imagenes/viajes/2014072572733/top-25-destinos-turisticos-mundo/0-281-707/a_Machu-Picch-a.jpg',
                            title: ' Machu Picchu, Peru',
                            info: '130 kilometers from Cuzco, the Lost City of the Incas stands between ravines in the middle of an inaccessible area of ​​the Peruvian Andes. The perfection of its constructions, its conservation and its natural setting, encased in the crest of a hill above the valley of the Urubamba River, make this site one of the most valuable archaeological treasures in the world and, of course, one of the most mystical.'
                          }],
                        }]

  return (
    <Carousel className='body-carousel' data-bs-theme="dark">
      {
        info_carousel.map(info => 
          <Carousel.Item >
            <Container fluid >
              <Row>
                {info.info_slide.map(i => 
                  <Col lg="6" xs="6" className='my-1'>
                    <img src={i.img}></img>
                    <div className='info-place'>
                      <p className='title'><b>{i.title}</b></p>
                      <p className='info'>{i.info = i.info.slice(0,190)}...</p>
                    </div>
                  </Col>
                )}
              </Row>
            </Container>
          </Carousel.Item>
        )
      }
    </Carousel>
  );
}

export default IndividualIntervalsExample;
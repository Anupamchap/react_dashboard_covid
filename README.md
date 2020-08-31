# react_dashboard_covid
Covid tracker Dashboard build using react


<h1>Screenshots REACT COVID TRACKER Dashboard</h1>
<img src="Capture1.PNG" width="80%">
<img src="Capture2.PNG" width="80%">

<img src="/public/Blank Diagram.png" width="80%">


<h1>Installation and Setup Instructions</h1>

<h4>Installation:</h4>

<p>npm install</p>

<h4>To Run Test Suite:</h4>

<p>npm test</p>

<h4>To Start Server:</h4>

<p>npm start</p>

<h4>To Visit App:</h4>

<p>localhost:3000/</p>


<h1>Folder Structure of src</h1>

<p>src                                        </p>
<p>    |   App.css                            </p>
<p>    |   App.js                             </p>
<p>    |   firebase.js                        </p>
<p>    |   index.css                          </p>
<p>    |   index.js                           </p>
<p>    |   logo.svg                           </p>
<p>    |   routes.js                          </p>
<p>    |   sagas.js                           </p>
<p>    |   serviceWorker.js                   </p>
<p>    |   setupTests.js                      </p>
<p>    |   store.js                           </p>
<p>    |                                      </p>
<p>    +---components                         </p>
<p>    |       GlobalStyles.js                </p>
<p>    |       Logo.js                        </p>
<p>    |       Page.js                        </p>
<p>    |                                      </p>
<p>    +---constants                          </p>
<p>    |       actionTypes.js                 </p>
<p>    |                                      </p>
<p>    +---importdata_scripts                 </p>
<p>    |       TimeSeriesDat.js               </p>
<p>    |                                      </p>
<p>    +---layouts                            </p>
<p>    |   +---DashboardLayout                </p>
<p>    |   |   |   index.js                   </p>
<p>    |   |   |   TopBar.js                  </p>
<p>    |   |   |                              </p>
<p>    |   |   \---NavBar                     </p>
<p>    |   |           index.js               </p>
<p>    |   |           NavItem.js             </p>
<p>    |   |                                  </p>
<p>    |   \---MainLayout                     </p>
<p>    |           index.js                   </p>
<p>    |           TopBar.js                  </p>
<p>    |                                      </p>
<p>    +---reducers                           </p>
<p>    |       login.js                       </p>
<p>    |       rootReducer.js                 </p>
<p>    |       signup.js                      </p>
<p>    |       timeSeriesData.js              </p>
<p>    |       userData.js                    </p>
<p>    |                                      </p>
<p>    +---test                               </p>
<p>    |   +---integration                    </p>
<p>    |   |       loginflow.test.js          </p>
<p>    |   |       signupflow.test.js         </p>
<p>    |   |                                  </p>
<p>    |   \---unit                           </p>
<p>    |       \---reducers                   </p>
<p>    |               login.test.js          </p>
<p>    |               signup.test.js         </p>
<p>    |               timeSeriesData.test.js </p>
<p>    |               userData.test.js       </p>
<p>    |                                      </p>
<p>    +---theme                              </p>
<p>    |       index.js                       </p>
<p>    |       shadows.js                     </p>
<p>    |       typography.js                  </p>
<p>    |                                      </p>
<p>    \---views                              </p>
<p>        +---account                        </p>
<p>        |   \---AccountView                </p>
<p>        |           index.js               </p>
<p>        |           Profile.js             </p>
<p>        |           ProfileDetails.js      </p>
<p>        |                                  </p>
<p>        +---auth                           </p>
<p>        |       LoginView.js               </p>
<p>        |       RegisterView.js            </p>
<p>        |                                  </p>
<p>        +---errors                         </p>
<p>        |       NotFoundView.js            </p>
<p>        |                                  </p>
<p>        +---reports                        </p>
<p>        |   \---DashboardView              </p>
<p>        |           CompletePicture.js     </p>
<p>        |           index.js               </p>
<p>        |           TotalActive.js         </p>
<p>        |           TotalConfirmed.js      </p>
<p>        |           TotalDeceased.js       </p>
<p>        |           TotalRecovered.js      </p>
<p>        |           Trends.js              </p>
<p>        |                                  </p>
<p>        \---settings                       </p>
<p>            \---SettingsView               </p>
<p>                    index.js               </p>
<p>                    Notifications.js       </p>
<p>                    Password.js            </p>

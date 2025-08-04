import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Monitor" size={32} className="text-primary" />
              <span className="text-xl font-bold text-primary">ClubManager</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="#results" className="text-gray-600 hover:text-primary transition-colors">Результаты</a>
              <a href="#cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="#about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="#contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Получить консультацию
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Полное управление вашим компьютерным клубом
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Автоматизируем процессы бронирования и оплаты. Берем на себя все обязанности по управлению бизнесом и повышаем качество обслуживания в 3 раза.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть презентацию
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0637ae2b-359a-4239-9ec6-da03f627b6f8.jpg" 
                alt="Современный компьютерный клуб"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-primary p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold">85%</div>
                <div className="text-sm">Увеличение выручки</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Наши услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Комплексное решение для управления компьютерными клубами с фокусом на автоматизацию и результат
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="Calendar" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Автоматизация бронирования</h3>
                <p className="text-gray-600 mb-4">
                  Умная система бронирования мест с интеграцией платежных систем и SMS-уведомлениями
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Онлайн-бронирование 24/7</li>
                  <li>• Автоматическая оплата</li>
                  <li>• Управление очередями</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="BarChart3" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Аналитика и отчеты</h3>
                <p className="text-gray-600 mb-4">
                  Детальная аналитика посещаемости, выручки и эффективности каждого рабочего места
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Дашборд в реальном времени</li>
                  <li>• Прогнозирование загрузки</li>
                  <li>• Финансовые отчеты</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="Users" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Управление персоналом</h3>
                <p className="text-gray-600 mb-4">
                  Система контроля работы сотрудников, расписания смен и KPI менеджеров
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Электронный табель</li>
                  <li>• Система мотивации</li>
                  <li>• Обучение персонала</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="Wrench" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Техническое обслуживание</h3>
                <p className="text-gray-600 mb-4">
                  Мониторинг состояния оборудования и превентивное обслуживание компьютеров
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Диагностика оборудования</li>
                  <li>• Плановые обновления</li>
                  <li>• Ремонт и замена</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="Target" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Маркетинг и продвижение</h3>
                <p className="text-gray-600 mb-4">
                  Привлечение новых клиентов через таргетированную рекламу и программы лояльности
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Реклама в соцсетях</li>
                  <li>• Программа лояльности</li>
                  <li>• Event-маркетинг</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="mb-6">
                  <Icon name="Shield" size={48} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Безопасность и контроль</h3>
                <p className="text-gray-600 mb-4">
                  Система видеонаблюдения, контроль доступа и защита от вредоносного ПО
                </p>
                <ul className="text-sm text-gray-500 space-y-2">
                  <li>• Видеонаблюдение 24/7</li>
                  <li>• Антивирусная защита</li>
                  <li>• Контроль контента</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Результаты до и после</h2>
            <p className="text-xl text-gray-600">
              Реальные показатели эффективности наших клиентов
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">До внедрения</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Загрузка зала</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-red-500 h-3 rounded-full" style={{width: '45%'}}></div>
                    </div>
                    <span className="font-bold text-red-600">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Выручка в месяц</span>
                  <span className="font-bold text-red-600">₽450,000</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Количество клиентов</span>
                  <span className="font-bold text-red-600">850</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-red-50 rounded-lg">
                  <span className="font-medium">Время обслуживания</span>
                  <span className="font-bold text-red-600">8 мин</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">После внедрения</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Загрузка зала</span>
                  <div className="flex items-center">
                    <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                      <div className="bg-green-500 h-3 rounded-full" style={{width: '85%'}}></div>
                    </div>
                    <span className="font-bold text-green-600">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Выручка в месяц</span>
                  <span className="font-bold text-green-600">₽832,500</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Количество клиентов</span>
                  <span className="font-bold text-green-600">1,640</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium">Время обслуживания</span>
                  <span className="font-bold text-green-600">2 мин</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-8 p-8 bg-primary text-white rounded-xl">
              <div className="text-center">
                <div className="text-3xl font-bold">+85%</div>
                <div className="text-sm opacity-90">Рост выручки</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">-75%</div>
                <div className="text-sm opacity-90">Время обслуживания</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">+93%</div>
                <div className="text-sm opacity-90">Клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">+89%</div>
                <div className="text-sm opacity-90">Загрузка</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section id="cases" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">Кейсы наших клиентов</h2>
            <p className="text-xl text-gray-600">
              Истории успеха компьютерных клубов, которые доверили нам управление
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Gamepad2" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">GameZone Premium</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Крупнейший игровой клуб города с 50 рабочими местами
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Выручка:</span>
                    <span className="font-semibold">+120%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Посещаемость:</span>
                    <span className="font-semibold">+95%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок окупаемости:</span>
                    <span className="font-semibold">3 месяца</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о кейсе
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Zap" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">CyberArena</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Киберспортивная арена с турнирными залами
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Выручка:</span>
                    <span className="font-semibold">+85%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Посещаемость:</span>
                    <span className="font-semibold">+110%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок окупаемости:</span>
                    <span className="font-semibold">4 месяца</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о кейсе
                </Button>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4">
                    <Icon name="Coffee" size={24} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">PlayCafe</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Семейный клуб с кафе и детской зоной
                  </p>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Выручка:</span>
                    <span className="font-semibold">+75%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Посещаемость:</span>
                    <span className="font-semibold">+60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Срок окупаемости:</span>
                    <span className="font-semibold">5 месяцев</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее о кейсе
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-primary">О компании ClubManager</h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на комплексном управлении компьютерными клубами с 2018 года. 
                За это время помогли более чем 150 заведениям увеличить прибыль и оптимизировать процессы.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Более 150 успешных проектов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Команда из 25+ экспертов</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Гарантия результата</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Check" size={20} className="text-green-500 mr-3" />
                  <span>Поддержка 24/7</span>
                </div>
              </div>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Узнать больше о нас
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-gray-600">Клубов под управлением</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">85%</div>
                <div className="text-sm text-gray-600">Средний рост выручки</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">6</div>
                <div className="text-sm text-gray-600">Лет на рынке</div>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">99%</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Готовы увеличить прибыль клуба?</h2>
            <p className="text-xl opacity-90">
              Свяжитесь с нами для бесплатной консультации и расчета экономического эффекта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="opacity-90">+7 (495) 123-45-67</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="opacity-90">info@clubmanager.ru</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="opacity-90">Москва, ул. Тверская, 15</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-2">Режим работы</h3>
              <p className="opacity-90">Пн-Пт: 9:00-20:00</p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 mr-4">
              <Icon name="Phone" size={20} className="mr-2" />
              Заказать звонок
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="FileText" size={20} className="mr-2" />
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Monitor" size={32} className="text-primary" />
                <span className="text-xl font-bold">ClubManager</span>
              </div>
              <p className="text-gray-400 text-sm">
                Полное управление компьютерными клубами. Автоматизация, увеличение прибыли, качественное обслуживание.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Автоматизация бронирования</li>
                <li>Аналитика и отчеты</li>
                <li>Управление персоналом</li>
                <li>Техническое обслуживание</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>О нас</li>
                <li>Наши кейсы</li>
                <li>Команда</li>
                <li>Карьера</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>+7 (495) 123-45-67</li>
                <li>info@clubmanager.ru</li>
                <li>Москва, ул. Тверская, 15</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 ClubManager. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
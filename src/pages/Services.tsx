import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Автоматизация бронирования",
      description: "Полная автоматизация процесса бронирования мест с интеграцией платежных систем",
      price: "от 15,000 ₽/мес",
      features: ["Онлайн-бронирование 24/7", "Автоматическая оплата", "SMS-уведомления", "Управление очередями"],
      icon: "Calendar",
      popular: true
    },
    {
      id: 2,
      title: "Аналитика и отчеты",
      description: "Детальная аналитика посещаемости, выручки и эффективности каждого рабочего места",
      price: "от 8,000 ₽/мес",
      features: ["Дашборд в реальном времени", "Прогнозирование загрузки", "Финансовые отчеты", "Экспорт данных"],
      icon: "BarChart3"
    },
    {
      id: 3,
      title: "Управление персоналом",
      description: "Система контроля работы сотрудников, расписания смен и KPI менеджеров",
      price: "от 12,000 ₽/мес",
      features: ["Электронный табель", "Система мотивации", "Обучение персонала", "Контроль KPI"],
      icon: "Users"
    },
    {
      id: 4,
      title: "Техническое обслуживание",
      description: "Мониторинг состояния оборудования и превентивное обслуживание компьютеров",
      price: "от 20,000 ₽/мес",
      features: ["Диагностика оборудования", "Плановые обновления", "Ремонт и замена", "Техподдержка 24/7"],
      icon: "Wrench"
    },
    {
      id: 5,
      title: "Маркетинг и продвижение",
      description: "Привлечение новых клиентов через таргетированную рекламу и программы лояльности",
      price: "от 25,000 ₽/мес",
      features: ["Реклама в соцсетях", "Программа лояльности", "Event-маркетинг", "SEO-продвижение"],
      icon: "Target"
    },
    {
      id: 6,
      title: "Безопасность и контроль",
      description: "Система видеонаблюдения, контроль доступа и защита от вредоносного ПО",
      price: "от 18,000 ₽/мес",
      features: ["Видеонаблюдение 24/7", "Антивирусная защита", "Контроль контента", "Система доступа"],
      icon: "Shield"
    }
  ];

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
              <a href="/" className="text-gray-600 hover:text-primary transition-colors">Главная</a>
              <a href="/services" className="text-primary font-medium">Услуги</a>
              <a href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="/cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="/about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="/contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Получить консультацию
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Наши услуги</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Комплексные решения для управления компьютерными клубами. 
            Выберите подходящие услуги или закажите полный пакет управления.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              Консультация
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              Смотреть тарифы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.id} className="relative hover:shadow-lg transition-shadow">
                {service.popular && (
                  <Badge className="absolute -top-3 left-4 bg-primary text-white">
                    Популярно
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <div className="text-2xl font-bold text-primary">{service.price}</div>
                    </div>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать услугу</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Нужна индивидуальная консультация?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Наши эксперты помогут подобрать оптимальный набор услуг для вашего клуба
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={20} className="mr-2" />
            Получить консультацию
          </Button>
        </div>
      </section>
    </div>
  );
}
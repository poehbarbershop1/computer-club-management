import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function Marketing() {
  const marketingServices = [
    {
      title: "Таргетированная реклама",
      description: "Настройка и ведение рекламных кампаний в социальных сетях",
      icon: "Target",
      features: ["ВКонтакте реклама", "Instagram/Facebook", "Яндекс.Директ", "Google Ads"],
      results: "Привлечение 200+ новых клиентов в месяц"
    },
    {
      title: "SMM продвижение",
      description: "Ведение социальных сетей и создание вирусного контента",
      icon: "Share2",
      features: ["Контент-план", "Дизайн постов", "Сторис и Reels", "Взаимодействие с аудиторией"],
      results: "Рост подписчиков на 300% за 6 месяцев"
    },
    {
      title: "Event-маркетинг",
      description: "Организация турниров, мероприятий и специальных акций",
      icon: "Calendar",
      features: ["Киберспортивные турниры", "Тематические вечеринки", "Корпоративные мероприятия", "Детские праздники"],
      results: "Увеличение выручки в выходные на 150%"
    },
    {
      title: "Программа лояльности",
      description: "Разработка и внедрение системы поощрения постоянных клиентов",
      icon: "Gift",
      features: ["Бонусная система", "Реферальная программа", "VIP-статусы", "Персональные скидки"],
      results: "Увеличение частоты посещений на 80%"
    }
  ];

  const campaigns = [
    {
      name: "Ночные турниры",
      type: "Event-маркетинг",
      budget: "₽50,000",
      result: "+45% выручки в ночное время",
      duration: "3 месяца"
    },
    {
      name: "Студенческие скидки",
      type: "Таргетированная реклама",
      budget: "₽30,000",
      result: "+120 новых клиентов",
      duration: "1 месяц"
    },
    {
      name: "Семейные выходные",
      type: "SMM + Events",
      budget: "₽40,000",
      result: "+200% семейных посещений",
      duration: "2 месяца"
    }
  ];

  const channels = [
    { name: "ВКонтакте", audience: "18-35 лет", reach: "50,000", cost: "₽15,000/мес" },
    { name: "Instagram", audience: "16-30 лет", reach: "35,000", cost: "₽20,000/мес" },
    { name: "Telegram", audience: "20-40 лет", reach: "15,000", cost: "₽8,000/мес" },
    { name: "YouTube", audience: "16-35 лет", reach: "25,000", cost: "₽25,000/мес" }
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
              <a href="/services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="/marketing" className="text-primary font-medium">Маркетинг</a>
              <a href="/staff" className="text-gray-600 hover:text-primary transition-colors">Персонал</a>
              <a href="/contacts" className="text-gray-600 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Консультация маркетолога
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Маркетинг и продвижение</h1>
              <p className="text-xl mb-8">
                Привлекаем новых клиентов и увеличиваем лояльность существующих. 
                Комплексный маркетинг для максимального роста вашего клуба.
              </p>
              <div className="flex space-x-8 mb-8">
                <div>
                  <div className="text-3xl font-bold">300%</div>
                  <div className="text-sm opacity-90">Рост клиентской базы</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">₽2.5М</div>
                  <div className="text-sm opacity-90">Дополнительной выручки</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">15</div>
                  <div className="text-sm opacity-90">Каналов продвижения</div>
                </div>
              </div>
              <div className="flex space-x-4">
                <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Увеличить продажи
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  Примеры кампаний
                </Button>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Результаты за месяц</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Новые клиенты</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">+247</div>
                    <div className="text-green-300 text-sm">+85%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Охват в соцсетях</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">125K</div>
                    <div className="text-green-300 text-sm">+120%</div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span>Конверсия рекламы</span>
                  <div className="text-right">
                    <div className="text-2xl font-bold">12.5%</div>
                    <div className="text-green-300 text-sm">+3.2%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Маркетинговые услуги</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр маркетинговых услуг для привлечения и удержания клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {marketingServices.map((service, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow">
                <CardHeader className="p-0 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <Icon name={service.icon} size={24} className="text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Badge className="bg-green-100 text-green-800">
                    {service.results}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Successful Campaigns */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Успешные кампании</h2>
            <p className="text-xl text-gray-600">
              Примеры наших маркетинговых кампаний с конкретными результатами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <Card key={index} className="p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-xl">{campaign.name}</CardTitle>
                  <Badge variant="secondary">{campaign.type}</Badge>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Бюджет:</span>
                    <span className="font-semibold">{campaign.budget}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Длительность:</span>
                    <span className="font-semibold">{campaign.duration}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="text-green-600 font-semibold">{campaign.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Каналы продвижения</h2>
            <p className="text-xl text-gray-600">
              Работаем со всеми популярными платформами для максимального охвата
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((channel, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold mb-2">{channel.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-medium">Аудитория:</span> {channel.audience}
                    </div>
                    <div>
                      <span className="font-medium">Охват:</span> {channel.reach}
                    </div>
                    <div className="text-primary font-semibold">
                      {channel.cost}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-xl text-gray-600">
              Пошаговый процесс создания и запуска маркетинговых кампаний
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Анализ и стратегия",
                  description: "Изучаем ваш клуб, конкурентов и целевую аудиторию. Разрабатываем маркетинговую стратегию."
                },
                {
                  step: "02", 
                  title: "Создание контента",
                  description: "Разрабатываем креативы, тексты и визуальные материалы для всех каналов продвижения."
                },
                {
                  step: "03",
                  title: "Запуск кампаний",
                  description: "Настраиваем и запускаем рекламные кампании, начинаем ведение социальных сетей."
                },
                {
                  step: "04",
                  title: "Оптимизация",
                  description: "Анализируем результаты, оптимизируем кампании для достижения максимальной эффективности."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы увеличить поток клиентов?</h2>
          <p className="text-xl mb-8">
            Получите бесплатный аудит вашего маркетинга и персональную стратегию продвижения
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Search" size={20} className="mr-2" />
              Бесплатный аудит
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация маркетолога
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
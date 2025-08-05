import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Стартовый",
      description: "Для небольших клубов до 15 мест",
      monthlyPrice: 25000,
      annualPrice: 250000,
      features: [
        "Автоматизация бронирования",
        "Базовая аналитика",
        "Техподдержка в рабочие часы",
        "Обучение персонала",
        "Мобильное приложение"
      ],
      popular: false,
      color: "border-gray-200"
    },
    {
      name: "Профессиональный",
      description: "Для средних клубов до 30 мест",
      monthlyPrice: 45000,
      annualPrice: 450000,
      features: [
        "Все из тарифа Стартовый",
        "Расширенная аналитика",
        "Управление персоналом",
        "Маркетинговые инструменты",
        "Техподдержка 24/7",
        "Интеграция с кассами",
        "Программа лояльности"
      ],
      popular: true,
      color: "border-primary"
    },
    {
      name: "Премиум",
      description: "Для крупных клубов от 30 мест",
      monthlyPrice: 75000,
      annualPrice: 750000,
      features: [
        "Все из тарифа Профессиональный",
        "Полное техническое обслуживание",
        "Персональный менеджер",
        "Индивидуальная настройка",
        "Приоритетная поддержка",
        "Дополнительные интеграции",
        "Консалтинг по развитию"
      ],
      popular: false,
      color: "border-gray-200"
    }
  ];

  const additionalServices = [
    { name: "Видеонаблюдение", price: "от 15,000 ₽/мес" },
    { name: "Система безопасности", price: "от 20,000 ₽/мес" },
    { name: "Дополнительная реклама", price: "от 30,000 ₽/мес" },
    { name: "Индивидуальная разработка", price: "от 50,000 ₽" },
    { name: "Обучение команды", price: "от 25,000 ₽" },
    { name: "Консалтинг", price: "от 10,000 ₽/час" }
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
              <a href="/pricing" className="text-primary font-medium">Тарифы</a>
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
          <h1 className="text-5xl font-bold mb-6">Тарифы и цены</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Выберите подходящий тариф для вашего компьютерного клуба. 
            Все тарифы включают гарантию результата и возможность смены тарифа.
          </p>
          
          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={!isAnnual ? "text-white" : "text-white/70"}>Помесячно</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-white"
            />
            <span className={isAnnual ? "text-white" : "text-white/70"}>
              Годовая оплата 
              <Badge className="ml-2 bg-green-500 text-white">-17%</Badge>
            </span>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.color} ${plan.popular ? 'border-2 shadow-lg' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    Популярный
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="text-4xl font-bold text-primary">
                    {isAnnual 
                      ? `${(plan.annualPrice / 12).toLocaleString()} ₽`
                      : `${plan.monthlyPrice.toLocaleString()} ₽`
                    }
                    <span className="text-lg text-gray-500">/мес</span>
                  </div>
                  {isAnnual && (
                    <p className="text-sm text-green-600">
                      Экономия: {((plan.monthlyPrice * 12 - plan.annualPrice)).toLocaleString()} ₽/год
                    </p>
                  )}
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Icon name="Check" size={16} className="text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-gray-900 hover:bg-gray-800'}`}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-8">Дополнительные услуги</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-white rounded-lg">
                  <span className="font-medium">{service.name}</span>
                  <span className="text-primary font-bold">{service.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Можно ли сменить тариф?</h3>
              <p className="text-gray-600">Да, вы можете изменить тариф в любое время. При повышении тарифа доплата рассчитывается пропорционально.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Есть ли скидки для долгосрочных контрактов?</h3>
              <p className="text-gray-600">При годовой оплате предоставляется скидка 17%. Также доступны индивидуальные условия для контрактов от 2 лет.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="font-semibold mb-2">Что включено в техподдержку?</h3>
              <p className="text-gray-600">Техподдержка включает консультации по системе, решение технических проблем и обновления ПО.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать?</h2>
          <p className="text-xl mb-8">
            Получите персональное предложение с учетом особенностей вашего клуба
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
            <Icon name="Calculator" size={20} className="mr-2" />
            Рассчитать стоимость
          </Button>
        </div>
      </section>
    </div>
  );
}
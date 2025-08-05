import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

export default function Contacts() {
  const offices = [
    {
      city: "Москва",
      address: "ул. Тверская, 15, офис 301",
      phone: "+7 (495) 123-45-67",
      email: "moscow@clubmanager.ru",
      hours: "Пн-Пт: 9:00-20:00, Сб: 10:00-18:00",
      isMain: true
    },
    {
      city: "Санкт-Петербург",
      address: "Невский проспект, 28, офис 205",
      phone: "+7 (812) 987-65-43",
      email: "spb@clubmanager.ru",
      hours: "Пн-Пт: 9:00-19:00, Сб: 10:00-17:00",
      isMain: false
    },
    {
      city: "Екатеринбург",
      address: "ул. Ленина, 52, офис 412",
      phone: "+7 (343) 555-12-34",
      email: "ekb@clubmanager.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    },
    {
      city: "Новосибирск",
      address: "Красный проспект, 35, офис 508",
      phone: "+7 (383) 444-56-78",
      email: "nsk@clubmanager.ru",
      hours: "Пн-Пт: 9:00-18:00",
      isMain: false
    }
  ];

  const contactMethods = [
    {
      title: "Телефон",
      description: "Звоните в любое время",
      value: "+7 (495) 123-45-67",
      icon: "Phone",
      action: "tel:+74951234567"
    },
    {
      title: "Email",
      description: "Ответим в течение часа",
      value: "info@clubmanager.ru",
      icon: "Mail",
      action: "mailto:info@clubmanager.ru"
    },
    {
      title: "Telegram",
      description: "Быстрая связь в мессенджере",
      value: "@clubmanager_bot",
      icon: "MessageCircle",
      action: "https://t.me/clubmanager_bot"
    },
    {
      title: "WhatsApp",
      description: "Консультации и поддержка",
      value: "+7 (495) 123-45-67",
      icon: "MessageSquare",
      action: "https://wa.me/74951234567"
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
              <a href="/services" className="text-gray-600 hover:text-primary transition-colors">Услуги</a>
              <a href="/pricing" className="text-gray-600 hover:text-primary transition-colors">Тарифы</a>
              <a href="/cases" className="text-gray-600 hover:text-primary transition-colors">Кейсы</a>
              <a href="/about" className="text-gray-600 hover:text-primary transition-colors">О компании</a>
              <a href="/contacts" className="text-primary font-medium">Контакты</a>
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
          <h1 className="text-5xl font-bold mb-6">Свяжитесь с нами</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Готовы ответить на все ваши вопросы и помочь выбрать оптимальное решение 
            для вашего компьютерного клуба. Работаем по всей России.
          </p>
          <div className="flex justify-center space-x-8">
            <div>
              <div className="text-2xl font-bold">24/7</div>
              <div className="text-sm opacity-90">Техподдержка</div>
            </div>
            <div>
              <div className="text-2xl font-bold">&lt;1 час</div>
              <div className="text-sm opacity-90">Время ответа</div>
            </div>
            <div>
              <div className="text-2xl font-bold">5 городов</div>
              <div className="text-sm opacity-90">Офисы в России</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы связи</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={method.icon} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <a 
                    href={method.action}
                    className="text-primary font-medium hover:underline"
                  >
                    {method.value}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Offices */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Отправьте заявку</h2>
              <Card className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Имя *</Label>
                      <Input id="name" placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <Label htmlFor="phone">Телефон *</Label>
                      <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  <div>
                    <Label htmlFor="company">Название клуба</Label>
                    <Input id="company" placeholder="Название вашего клуба" />
                  </div>
                  <div>
                    <Label htmlFor="seats">Количество мест</Label>
                    <Input id="seats" type="number" placeholder="Количество игровых мест" />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Расскажите о ваших задачах и целях..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                  </p>
                </form>
              </Card>
            </div>

            {/* Offices */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Наши офисы</h2>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <Card key={index} className={`p-6 ${office.isMain ? 'border-primary border-2' : ''}`}>
                    <CardHeader className="p-0 mb-4">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-xl">{office.city}</CardTitle>
                        {office.isMain && (
                          <span className="text-xs bg-primary text-white px-2 py-1 rounded">
                            Главный офис
                          </span>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                      <div className="flex items-start">
                        <Icon name="MapPin" size={16} className="text-gray-500 mr-3 mt-1" />
                        <span className="text-sm">{office.address}</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Phone" size={16} className="text-gray-500 mr-3" />
                        <a href={`tel:${office.phone.replace(/\D/g, '')}`} className="text-sm hover:text-primary">
                          {office.phone}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Mail" size={16} className="text-gray-500 mr-3" />
                        <a href={`mailto:${office.email}`} className="text-sm hover:text-primary">
                          {office.email}
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Clock" size={16} className="text-gray-500 mr-3" />
                        <span className="text-sm">{office.hours}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Как быстро вы отвечаете на заявки?</h3>
              <p className="text-gray-600">Мы отвечаем на все заявки в течение часа в рабочее время. В выходные дни — в течение 4 часов.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Можно ли получить консультацию бесплатно?</h3>
              <p className="text-gray-600">Да, первичная консультация и анализ вашего клуба абсолютно бесплатны.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Работаете ли вы в других городах?</h3>
              <p className="text-gray-600">Мы работаем по всей России. Удаленное управление позволяет нам эффективно работать с клиентами в любом городе.</p>
            </Card>
            <Card className="p-6">
              <h3 className="font-semibold mb-2">Какие гарантии вы предоставляете?</h3>
              <p className="text-gray-600">Мы гарантируем увеличение выручки минимум на 50% в течение 6 месяцев или возвращаем деньги.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готовы начать сотрудничество?</h2>
          <p className="text-xl mb-8">
            Свяжитесь с нами любым удобным способом и получите персональное предложение
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в Telegram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
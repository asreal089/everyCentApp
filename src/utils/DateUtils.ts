
export default function formatDate(date : Date) :string{
    return date.toLocaleDateString('pt-BR', {day: '2-digit', month: '2-digit'});
}
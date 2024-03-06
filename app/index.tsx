import { Todo, useGetTodoListQuery } from "@/graphql/generated";
import { View, Text } from "react-native";

export default function Index() {
  const { data, error, loading } = useGetTodoListQuery();

  if (loading)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>Loading...</Text>
      </View>
    );

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>Error: {error.message}</Text>
      </View>
    );
  }
  return (
    <View style={{ flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      {data?.getTodoList?.map((todo) => (
        <Text key={todo.id} style={{ color: "#fff", fontWeight: "bold", fontSize: 30 }}>
          {todo.title}
        </Text>
      ))}
    </View>
  );
}

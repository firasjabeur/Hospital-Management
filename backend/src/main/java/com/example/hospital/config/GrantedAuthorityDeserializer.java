package com.example.hospital.config;


import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.fasterxml.jackson.databind.node.TextNode;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

public class GrantedAuthorityDeserializer extends JsonDeserializer<Collection<? extends GrantedAuthority>> {

    @Override
    public Collection<? extends GrantedAuthority> deserialize(JsonParser jp, DeserializationContext ctxt)
            throws IOException, JsonProcessingException {

        ObjectMapper mapper = new ObjectMapper();
        ArrayNode node = mapper.readTree(jp);

        List<SimpleGrantedAuthority> authorities = new ArrayList<>();
        for (JsonNode jsonNode : node) {
            if (jsonNode instanceof TextNode) {
                authorities.add(new SimpleGrantedAuthority(jsonNode.asText()));
            } else if (jsonNode instanceof ArrayNode) {
                ArrayNode arrayNode = (ArrayNode) jsonNode;
                for (JsonNode nestedNode : arrayNode) {
                    authorities.add(new SimpleGrantedAuthority(nestedNode.asText()));
                }
            }
        }

        return authorities;
    }
}
